# Hotel Winner (projeto conceitual)

Site conceitual para o Hotel Winner, de Barretos (SP). **Não é o site oficial** e nada aqui foi
confirmado com o hotel. Identidade clara de hotel boutique: paleta original do hotel (preto, amarelo, vermelho, branco); Bodoni Moda nos títulos e Jost no texto.

## Rodar

```bash
npm install      # no Windows/PowerShell, se bloquear: npm.cmd install
npm run dev      # npm.cmd run dev  →  http://localhost:4321
npm run build    # gera o site estático em dist/
npm run test:e2e # testes no navegador (1ª vez: npx playwright install chromium)
```

## Identidade visual

Paleta original do hotel (preto, amarelo, vermelho, laranja, branco e grafite), aplicada com contraste medido.

| Cor | Código | Uso | Contraste |
|---|---|---|---|
| Branco | `#FFFFFF` | Fundo principal | — |
| Amarelo claro | `#FFF6D6` | Faixas de seção (separam do branco) | — |
| Amarelo Winner | `#FFCC00` | Fundo de botão, marcadores, destaques sobre preto | 1,4:1 no branco: **nunca** texto nem borda de campo; 14,3:1 com texto preto |
| Preto | `#000000` | Títulos, botões escuros, seção de avaliações | 21:1 |
| Grafite | `#292929` | Texto corrido | 14,7:1 |
| Cinza | `#555555` | Texto secundário | 7,5:1 |
| Vermelho | `#FF0000` | Só detalhes gráficos (traços da logo) | 4,0:1: não usar em texto |
| Vermelho escuro | `#B30000` | Texto pequeno de destaque | 6,7:1 |
| Laranja | `#FF9934` | Reservado (ainda sem uso) | — |

Movimento: entrada do título, revelações discretas e um leve zoom no vídeo ao rolar.
Tudo desliga com "reduzir movimento". As animações usam só `opacity` e transformações; o conteúdo
continua legível para leitores de tela antes de aparecer.

## Skills do Claude Code (em `.claude/skills/` na raiz do repositório)

Instaladas com `npx skills add <repositório> --skill <nome> --agent claude-code --copy`
(versões registradas em `skills-lock.json`):

| Skill | Origem oficial |
|---|---|
| frontend-design | anthropics/skills |
| impeccable | pbakaus/impeccable |
| ui-ux-pro-max | nextlevelbuilder/ui-ux-pro-max-skill |
| emil-design-eng, animate, review-animations | emilkowalski/skills |
| gsap-core, gsap-timeline, gsap-scrolltrigger, gsap-performance | greensock/gsap-skills |
| web-design-guidelines | vercel-labs/agent-skills |

Não instaladas de propósito: `vercel-react-best-practices` (o projeto não usa React) e as variantes
de React, Vue e React Native das outras coleções. Playwright não é skill: é dependência de testes.

## Testes

`npm run test:e2e` roda 46 testes em `tests/site.spec.ts`: páginas e 404, ausência de rolagem
horizontal em 375/768/1280/1920 px, acessibilidade com axe (WCAG 2.2 AA, inclusive com erros no
formulário), dados reais presentes e afirmações não confirmadas ausentes, formulário, menu do
celular, vídeo e "reduzir movimento".

## Onde mexer

| O quê | Onde |
|---|---|
| Endereço, telefone, horários, comodidades, distâncias, avaliação, pendências | `src/data/hotel.ts` |
| Cores, tipografia, espaçamentos | `src/styles/global.css` (variáveis em `:root`) |
| Animações (GSAP + ScrollTrigger) | `src/scripts/movimento.ts` |
| Fotos (espaços reservados) | `src/components/FotoSlot.astro`: passe `foto="/fotos/arquivo.jpg"` e `alt` |
| Página inicial / Acomodações / Contato | `src/pages/` |
| Formulário de reserva (validação, ligar, copiar, WhatsApp) | `src/components/ReservaForm.astro` |

## Trocar as ilustrações por fotos reais

Todas as imagens passam pelo componente `src/components/Imagem.astro`: sem foto, ele desenha a
ilustração; com foto, usa a foto. Para trocar:

1. Coloque o arquivo em `public/fotos/` (ex.: `public/fotos/fachada.jpg`).
2. Passe o caminho no `<Imagem>` que você quer trocar, por exemplo `foto="/fotos/fachada.jpg"` em `src/pages/index.astro`.

Escreva sempre um `alt` descritivo. Depois de trocar, revise o contraste do texto sobre a foto do topo
(o texto é escuro; fotos escuras exigem trocá-lo para branco).

## Vídeo no topo da home

Hoje o topo da home usa um vídeo provisório do Mixkit (veja `CREDITOS.md`). Sem os arquivos de `public/videos/`, ele volta à ilustração. Para trocar o vídeo:

1. Guarde o original em `videos-originais/` (essa pasta não vai para o GitHub).
2. Rode `scripts/preparar-video.sh videos-originais/seu-video.mp4 1 13` (começa no segundo 1 e usa 13 segundos).
   O script gera `public/videos/hero.mp4`, `hero.webm` e `hero-poster.jpg`, sem áudio, e dissolve o final no começo para a repetição não dar salto.
   Se passar de 4 MB, aumente a compressão: `CRF_MP4=33 CRF_WEBM=45 scripts/preparar-video.sh ...`.
3. Rode o build. O site detecta os arquivos sozinho e passa a mostrar o vídeo, com botão de pausa.
4. Preencha `CREDITOS.md` com a origem e a licença.

Com vídeo, o texto do topo fica branco sobre um véu escuro leve. Se o novo vídeo for claro, ajuste `hero--video` em `src/pages/index.astro`
e **meça o contraste do título em vários momentos do vídeo**.
Para voltar à ilustração, apague os três arquivos de `public/videos/`.
O vídeo não toca sozinho para quem pede "reduzir movimento" no sistema nem com economia de dados.

## WhatsApp

O WhatsApp do hotel **não foi informado**. Sem ele, o formulário prepara o pedido e oferece "Ligar para o hotel" e "Copiar mensagem".
Se o hotel tiver WhatsApp, preencha `whatsapp` em `src/data/hotel.ts` (formato internacional, só dígitos, ex.: `5517999999999`).

## Dados

Tudo o que aparece no site vem do documento de conteúdo enviado para o projeto (endereço, telefone, check-in e check-out,
comodidades, distâncias e a nota do Google). **O site não afirma nada além disso.**

O que ainda falta confirmar está na lista `pendencias` de `src/data/hotel.ts`: categorias e quantidade de quartos, fotos oficiais,
valores, formas de pagamento, cancelamento, horário do café, regras para crianças e animais, link de reservas, redes sociais,
o que "Acessibilidade" inclui e o bairro (o documento cita "Dr. Paulo Prata" e "Jardim Campo Redondo").

Os preços de referência (R$ 260 no Booking/Agoda) **não** são exibidos, como o documento orienta.

## Outras versões

- `/prototipos/` tem as três direções do topo que foram comparadas (claro, paisagem, escuro).
- A primeira versão do site (identidade de placa de rodovia) está no histórico do git: commit `592d929`.

## Verificações feitas

Revisão com o plugin UI/UX Behaves aplicada: resumo de erros com foco, aviso imediato de quarto x hóspedes,
saída para pop-up bloqueado (link e copiar mensagem), menu com foco preso no painel, sem deslocamento
do título quando aparecem erros e página 404.


axe-core sem violações (home, acomodações, contato e 404, desktop e celular, incluindo erros do formulário);
varredura de todas as páginas publicadas contra afirmações não confirmadas; sem rolagem horizontal.
Não testado com leitor de tela real.
