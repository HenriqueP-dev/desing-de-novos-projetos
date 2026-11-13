#!/usr/bin/env bash
# Prepara o vídeo do topo da home a partir de um arquivo original.
#
# Uso:  scripts/preparar-video.sh caminho/do/original.mp4 [inicio_em_segundos] [duracao_em_segundos]
# Ex.:  scripts/preparar-video.sh videos-originais/campo.mp4 1 13
#
# Gera em public/videos/: hero.mp4 (H.264), hero.webm (VP9) e hero-poster.jpg.
# Sem áudio, no máximo 1920 px de largura, 24 quadros por segundo. Alvo: até 4 MB por arquivo.
#
# Repetição suave (padrão): os últimos instantes se dissolvem nos primeiros, então o vídeo
# volta ao começo sem "salto". O vídeo final fica FADE segundos mais curto que o trecho cortado.
# Para desligar: LOOP_SUAVE=0 scripts/preparar-video.sh ...   Para mudar a dissolução: FADE=2 ...
# Para mudar a qualidade (maior número = menor arquivo): CRF_MP4=30 CRF_WEBM=40 ...
set -euo pipefail

ENTRADA="${1:?Informe o arquivo de vídeo original. Ex.: scripts/preparar-video.sh videos-originais/campo.mp4 1 13}"
INICIO="${2:-0}"
DURACAO="${3:-10}"
LOOP_SUAVE="${LOOP_SUAVE:-1}"
FADE="${FADE:-1.5}"
CRF_MP4="${CRF_MP4:-28}"
CRF_WEBM="${CRF_WEBM:-38}"
SAIDA="$(cd "$(dirname "$0")/.." && pwd)/public/videos"

command -v ffmpeg >/dev/null || { echo "ffmpeg não encontrado. Instale em https://ffmpeg.org/download.html"; exit 1; }
[ -f "$ENTRADA" ] || { echo "Arquivo não encontrado: $ENTRADA"; exit 1; }
mkdir -p "$SAIDA"

BASE="scale='min(1920,iw)':-2,fps=24,format=yuv420p"
if [ "$LOOP_SUAVE" = "1" ]; then
  FIM=$(awk -v d="$DURACAO" -v f="$FADE" 'BEGIN { printf "%.3f", d - f }')
  if awk -v d="$DURACAO" -v f="$FADE" 'BEGIN { exit !(d <= 3 * f) }'; then
    echo "Trecho curto demais para a repetição suave (use pelo menos 3x o FADE). Usando LOOP_SUAVE=0."
    LOOP_SUAVE=0
  fi
fi

if [ "$LOOP_SUAVE" = "1" ]; then
  # meio: do FADE até (duração - FADE). cauda -> cabeça: dissolve o fim do trecho no começo dele.
  FILTRO="[0:v]${BASE},split=3[a][b][c];[a]trim=start=${FADE}:end=${FIM},setpts=PTS-STARTPTS[meio];[b]trim=start=${FIM},setpts=PTS-STARTPTS[cauda];[c]trim=start=0:end=${FADE},setpts=PTS-STARTPTS[cabeca];[cauda][cabeca]xfade=transition=fade:duration=${FADE}:offset=0[mix];[meio][mix]concat=n=2:v=1:a=0[v]"
  ARGS_FILTRO=(-filter_complex "$FILTRO" -map "[v]")
else
  ARGS_FILTRO=(-vf "$BASE")
fi

echo "Gerando MP4 (H.264)..."
ffmpeg -y -loglevel error -ss "$INICIO" -t "$DURACAO" -i "$ENTRADA" -an "${ARGS_FILTRO[@]}" \
  -c:v libx264 -preset slow -crf "$CRF_MP4" -pix_fmt yuv420p -movflags +faststart "$SAIDA/hero.mp4"
echo "Gerando WebM (VP9)..."
ffmpeg -y -loglevel error -ss "$INICIO" -t "$DURACAO" -i "$ENTRADA" -an "${ARGS_FILTRO[@]}" \
  -c:v libvpx-vp9 -b:v 0 -crf "$CRF_WEBM" -row-mt 1 "$SAIDA/hero.webm"
echo "Gerando imagem de capa..."
ffmpeg -y -loglevel error -ss "$(awk -v i="$INICIO" -v f="$FADE" 'BEGIN { printf "%.3f", i + f }')" -i "$ENTRADA" -frames:v 1 \
  -vf "scale='min(1920,iw)':-2" -q:v 3 "$SAIDA/hero-poster.jpg"

echo
DUR_FINAL=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$SAIDA/hero.mp4" | awk '{ printf "%.1f", $1 }')
echo "Duração final: ${DUR_FINAL} s"
for f in hero.mp4 hero.webm hero-poster.jpg; do
  tam=$(wc -c < "$SAIDA/$f")
  printf "%-18s %6d KB" "$f" "$((tam / 1024))"
  [ "$tam" -gt 4194304 ] && printf "   <-- acima de 4 MB: aumente CRF_MP4/CRF_WEBM, use um trecho mais curto ou um vídeo mais simples"
  printf "\n"
done
echo
echo "Pronto. Rode o build e confira o topo da home. Lembre de anotar a fonte e a licença em CREDITOS.md."
