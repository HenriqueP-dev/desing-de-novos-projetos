# 06 — Layout e composição

## Elicyon — narrativa editorial por imagem

Hero ocupa viewport; wordmark e links sobre fotografia. O fluxo alterna mosaico de serviços, statements, projetos em carrossel pinned, equipe e journal; texto curto e espaço negativo deixam a imagem dominar. Fotos vertical/horizontal mantêm crops próprios. CTA final usa moldura cream espessa e botão central; footer wordmark quase full-width. Alternar imagem imersiva e declaração tipográfica cria ritmo.

## Hanzo — estúdio e repertório

Sequência overview documentada: Hero, Intro, Process/testimonials, Case studies, About, Pricing, FAQ e Footer. Nav pill condensa identidade/menu; process cards, case, depoimento, preços e perfil escaneiam uma oferta variada. Ticker/logo e work gallery ampliam variedade de cliente. Catálogo próprio tem seções numeradas, sidebar, grids 2 colunas e specimens grandes; a altura `clamp(360px,60vh,620px)`/`clamp(440px,72vh,780px)` é do catalog.

## NØEMA — capítulos e ambientes

Sequência conceitual: Hero, manifesto, anatomy, collective, thesis, protocol, living steps, anti-formula, work/project track, capability instrument, closing CTA e marquee/footer. Index lateral e progress global situam o visitante. A composição alterna void/paper e usa rótulos, linhas, HUD, placas e imagens mascaradas. Anatomy/Field podem ser pinned +240%/+210%; essas medidas são do catálogo/legenda, e a CSS overview ausente impede validar visualmente a página original.

## TerraSprint — landing de conversão

Hero central com eyebrow/badge, h1, copy e CTAs; chips flutuantes orbitam em desktop e desaparecem em telas menores. Seguem seis service cards, três pacotes, case comparisons split, proof/data e contact. Header fixed em cápsula translúcida; page-shell tem radius 28/40px e inset aproximado 8/12/16px nos breakpoints registrados. A oferta continua legível mesmo sem fundo animado.

## Padrões de composição

- Hierarquia constante: eyebrow/índice → título → contexto → ação, embora forma visual varie.
- Elicyon/NØEMA usam espaço negativo e escala; Hanzo/TerraSprint usam módulos com mais densidade.
- Separar seção com mudança de superfície, imagem, linha ou ritmo; evitar repetir o mesmo card grid em toda a página.
- Reservar pin/sticky para narrativa com progresso entendível; não prender o usuário sem indicação de scroll.
- Texto sobre imagem exige scrim ajustado a cada crop; vidro depende do que está por trás.
- Imagem é conteúdo em Elicyon, prova de amplitude em Hanzo, suporte/atmosfera em TerraSprint, metáfora narrativa em NØEMA.

## Grid e spacing: dados observados versus starter

Valores encontrados: NØEMA catalog tem max 1180px e sidebar 236px; Terra nav max 880px e página framed; Elicyon usa paddings pontuais 20px, gaps 40px e seções com `pt-[60px]`; Hanzo specimens usam grid2 e cards de 576px em um preset. Isto não prova um grid global em nenhuma referência. Não foi possível reconstruir colunas/gutters de todos os sites sem runtime/viewport.

**Starter recomendável para projeto futuro (proposta):** container `min(100% - 2*clamp(1rem,4vw,3rem), 75rem)`, 12 colunas desktop, 8 tablet, 4 mobile, gutter 24px desktop/16px mobile. Quebrar colunas pelo conteúdo (navigation/actions, reading text, media), não por número fixo. Espaçamento 4/8/12/16/24/32/48/64/96/128px documentado em `01-design-system.md`; aplicar rhythm por seção e manter line-length.

```css
.container { width: min(calc(100% - clamp(2rem, 8vw, 6rem)), 75rem); margin-inline: auto; }
.grid { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 1.5rem; }
@media (max-width: 60rem) { .grid { grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 1.25rem; } }
@media (max-width: 40rem) { .grid { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; } }
```

Esse CSS é exemplo de ponto de partida; ajustar breakpoints ao conteúdo e não usar grid de 12 colunas se layout de uma coluna servir melhor.
