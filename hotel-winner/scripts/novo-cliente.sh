#!/usr/bin/env bash
# Cria um projeto novo para outro cliente, a partir deste modelo.
#
# Uso:  scripts/novo-cliente.sh ../nome-do-cliente
#
# Copia o código e deixa de fora tudo que é do Hotel Winner (fotos, logo, vídeo, apresentação, protótipos,
# documentos de pendências e créditos). O conteúdo do novo projeto começa em branco (src/conteudo/novo.ts).
# Não altera este projeto. Recusa-se a escrever numa pasta que já existe.
set -euo pipefail

DESTINO="${1:?Informe a pasta do novo projeto. Ex.: scripts/novo-cliente.sh ../pousada-sol}"
ORIGEM="$(cd "$(dirname "$0")/.." && pwd)"

[ -e "$DESTINO" ] && { echo "A pasta '$DESTINO' já existe. Escolha outro nome (nada foi alterado)."; exit 1; }
mkdir -p "$DESTINO"
DESTINO="$(cd "$DESTINO" && pwd)"

# 1) copia o código, sem dependências, sem o que é gerado e sem o material do Hotel Winner
tar -C "$ORIGEM" \
  --exclude='./node_modules' --exclude='./dist' --exclude='./.astro' --exclude='./.impeccable' \
  --exclude='./capturas' --exclude='./test-results' --exclude='./playwright-report' --exclude='./videos-originais' --exclude='./fotos-originais' \
  --exclude='./public/fotos' --exclude='./public/videos' --exclude='./public/apresentacao' --exclude='./public/logo-winner.png' \
  --exclude='./src/pages/apresentacao.astro' --exclude='./src/pages/prototipos' --exclude='./src/layouts/Proto.astro' \
  --exclude='./src/components/cenas' --exclude='./src/components/Imagem.astro' --exclude='./src/components/ReservaBarra.astro' \
  --exclude='./src/conteudo/winner.ts' --exclude='./tests/cliente-winner.spec.ts' \
  --exclude='./PENDENCIAS.md' --exclude='./CREDITOS.md' \
  -cf - . | tar -C "$DESTINO" -xf -

# 2) conteúdo em branco como cliente ativo
cp "$ORIGEM/src/conteudo/em-branco.ts" "$DESTINO/src/conteudo/novo.ts"
rm -f "$DESTINO/src/conteudo/em-branco.ts"
cat > "$DESTINO/src/conteudo/ativo.ts" <<'EOT'
/**
 * QUAL CLIENTE ESTÁ ATIVO. Todas as páginas importam daqui.
 * Edite `novo.ts` (ou crie outro arquivo e troque a linha abaixo).
 */
export * from './novo';
EOT

# 3) arquivos de apoio do novo projeto
mkdir -p "$DESTINO/public/fotos" "$DESTINO/public/videos"
touch "$DESTINO/public/fotos/.gitkeep" "$DESTINO/public/videos/.gitkeep"
printf '# Créditos de imagens e vídeos\n\nUma linha para cada foto ou vídeo usado: arquivo, onde aparece, origem (link), autor, licença, se é provisório.\nSem autor, origem e licença, o arquivo não deve ir para o site público.\n\n| Arquivo | Onde aparece | Origem | Autor | Licença | Provisório? |\n|---|---|---|---|---|---|\n' > "$DESTINO/CREDITOS.md"
printf '# Pendências\n\nSepare em: 1) encontrado no site oficial, 2) encontrado em fontes externas, 3) precisa de confirmação do cliente.\n' > "$DESTINO/PENDENCIAS.md"

NOME_PASTA="$(basename "$DESTINO")"
sed -i "s/\"name\": \"[^\"]*\"/\"name\": \"$NOME_PASTA\"/" "$DESTINO/package.json"
printf '# Site de cliente\n\nProjeto criado a partir do modelo de sites para hospedagem.\n\n- Conteudo: `src/conteudo/novo.ts`\n- Cores e fontes: `src/styles/tema.css`\n- Passo a passo completo: `COMO-CRIAR-NOVO-SITE.md`\n\n```bash\nnpm install\nnpm run build\nnpm run test:e2e\n```\n' > "$DESTINO/README.md"

echo
echo "Projeto criado em: $DESTINO"
echo
echo "Próximos passos (detalhes em COMO-CRIAR-NOVO-SITE.md):"
echo "  1. cd $DESTINO && npm install"
echo "  2. Preencha src/conteudo/novo.ts (nome, telefone, endereço, textos, quartos)"
echo "  3. Troque as cores e fontes em src/styles/tema.css"
echo "  4. Coloque a logo em public/ e ajuste 'logo' no novo.ts; fotos em public/fotos/"
echo "  5. npm run build && npm run test:e2e"
