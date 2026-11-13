#!/usr/bin/env bash
# Prepara o vídeo do topo da home a partir de um arquivo original.
#
# Uso:  scripts/preparar-video.sh caminho/do/original.mp4 [inicio_em_segundos] [duracao_em_segundos]
# Ex.:  scripts/preparar-video.sh videos-originais/campo.mp4 3 10
#
# Gera em public/videos/: hero.mp4 (H.264), hero.webm (VP9) e hero-poster.jpg.
# Sem áudio, no máximo 1920 px de largura, 24 quadros por segundo.
# Escolha um trecho que "feche" bem, para a repetição não dar salto. Alvo: até 4 MB por arquivo.
set -euo pipefail

ENTRADA="${1:?Informe o arquivo de vídeo original. Ex.: scripts/preparar-video.sh videos-originais/campo.mp4 3 10}"
INICIO="${2:-0}"
DURACAO="${3:-10}"
SAIDA="$(cd "$(dirname "$0")/.." && pwd)/public/videos"

command -v ffmpeg >/dev/null || { echo "ffmpeg não encontrado. Instale em https://ffmpeg.org/download.html"; exit 1; }
[ -f "$ENTRADA" ] || { echo "Arquivo não encontrado: $ENTRADA"; exit 1; }
mkdir -p "$SAIDA"

FILTRO="scale='min(1920,iw)':-2,fps=24"
echo "Gerando MP4 (H.264)..."
ffmpeg -y -loglevel error -ss "$INICIO" -t "$DURACAO" -i "$ENTRADA" -an -vf "$FILTRO" \
  -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p -movflags +faststart "$SAIDA/hero.mp4"
echo "Gerando WebM (VP9)..."
ffmpeg -y -loglevel error -ss "$INICIO" -t "$DURACAO" -i "$ENTRADA" -an -vf "$FILTRO" \
  -c:v libvpx-vp9 -b:v 0 -crf 38 -row-mt 1 "$SAIDA/hero.webm"
echo "Gerando imagem de capa..."
ffmpeg -y -loglevel error -ss "$INICIO" -i "$ENTRADA" -frames:v 1 -vf "scale='min(1920,iw)':-2" -q:v 3 "$SAIDA/hero-poster.jpg"

echo
for f in hero.mp4 hero.webm hero-poster.jpg; do
  tam=$(wc -c < "$SAIDA/$f")
  printf "%-18s %6d KB" "$f" "$((tam / 1024))"
  [ "$tam" -gt 4194304 ] && printf "   <-- acima de 4 MB: use um trecho mais curto ou um vídeo mais simples"
  printf "\n"
done
echo
echo "Pronto. Rode o build e confira o topo da home. Lembre de anotar a fonte e a licença em CREDITOS.md."
