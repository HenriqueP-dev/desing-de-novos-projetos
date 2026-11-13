# Créditos de imagens e vídeos

Preencha uma linha para **cada** foto ou vídeo usado no site (inclusive os provisórios).
Sem autor, link e licença, o arquivo não deve ir para o site público.

| Arquivo | Onde aparece | Origem (link) | Autor | Licença | Provisório? |
|---|---|---|---|---|---|
| `public/videos/hero.mp4`, `hero.webm`, `hero-poster.jpg` | Fundo do topo da home | https://mixkit.co/free-stock-video/a-road-between-a-big-green-agriculture-field-827/ (clipe 827, "A road between a big green agriculture field") | Não informado na página do clipe | Mixkit Stock Video Free License: uso comercial e não comercial, cópia e modificação permitidas, crédito não obrigatório (a Mixkit agradece). Licença lida em 13/11/2026. | **Sim**, até o vídeo profissional |
| `public/fotos/apto-*.webp` (5 arquivos: duplo, triplo x3, quádruplo) | Home (cartões) e página Acomodações | **Não informada**: enviadas pelo cliente, sem link de origem | Não informado | **Não confirmada** | **Sim**: confirmar origem, autor e autorização de uso com o hotel antes de publicar |

Observações:
- Foto ou vídeo de banco continua marcado no site como "ilustrativo".
- Material de redes sociais (Pinterest, Instagram, TikTok, YouTube) não entra no site.
- Quando o hotel enviar o material oficial ou o vídeo profissional ficar pronto, troque as linhas provisórias.

## Como o vídeo do topo foi preparado

- Original: versão Full HD (1920x1080) baixada do Mixkit, com 15,8 s.
- Trecho usado: de 1 s a 14 s, com dissolução de 1,5 s do final no começo, para a repetição não dar salto. Resultado: 11,5 s.
- Sem áudio, 24 quadros por segundo. MP4 de cerca de 2,5 MB e WebM de cerca de 3 MB.
- Comando: `CRF_MP4=33 CRF_WEBM=45 scripts/preparar-video.sh videos-originais/827-1080.mp4 1 13`
- Ao trocar pelo vídeo profissional do hotel, atualize ou remova esta linha. Se o novo vídeo for claro, o texto do topo pode voltar a ser escuro (veja `hero--video` em `src/pages/index.astro`).
- Antes de usar qualquer outro clipe do Mixkit, confira se a página mostra a licença **Free**. Alguns clipes têm a licença **Restrita**, só para uso pessoal.
