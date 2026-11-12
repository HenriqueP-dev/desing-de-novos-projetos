# 01 — Fundamentos e design systems

**Proveniência:** os quatro catálogos `design-system.html`, seus overviews offline e estilos/scripts locais. Valores declarados no código são **exatos**; descrições de aparência são observações; explicações causais são inferências. O relatório geral permanece em [`docs/analise-referencias.md`](../docs/analise-referencias.md).

## Elicyon

- **Direção:** editorial residencial de alto padrão; fotografia quente e tipografia proprietária, com ações silenciosas.
- **Tokens centrais:** cream `#F4F2EE`; ink `#000`; azul `#6E89C8` (footer, consent, hero reveal); ouro `#907533` (cursor); terracota `#8D5D52` (frame do object slider).
- **Superfícies:** grandes campos planos e imagem full-bleed, sem card universal. Inputs e consent usam regra preta de 1px; call final usa moldura cream com bordas extensas (mobile `74px` horizontal/`136px` vertical; desktop `115px`/`148px` em espécimes).
- **Media overlays:** black `.10` no hero, `.20` tiles e `.20` team abaixo de `lg`/`.30` a partir de `lg`; slide gradient preto `.20`→transparente. Texto sobre foto depende desses níveis e do crop.
- **Layout:** mosaicos, imagens em várias proporções, statements deslocados, carrossel de projetos pinned, equipe, journal, call final e footer wordmark. Cabeçalho/menu tem regra em 1024px; classes md/lg regem outros ajustes.
- **Decor:** wordmark e cursor em SVG, imagens de interiores/objetos, linhas e revelações tipográficas. O cursor some em dispositivos `hover:none`.

## Hanzo

- **Direção:** estúdio digital multiprojeto, base neutra para portfólios diversos, acento laranja (`#FF3700`) e verde (`#0CB300`) em amostras/estado.
- **Tipografia/ícones:** Inter Display, Instrument Serif italic em eyebrows, Phosphor Regular; mono em metadados.
- **Superfícies:** pills e cards brancos, anel branco translúcido de 8px, sombra macia longa; card frosted e frame dark para mídia. Sidebar do catálogo usa `rgba(12,12,12,.86)`, blur 18px, saturate 1.1, radius 24px e halo 8px a 25%.
- **Repertório:** 12 grupos numerados; process, case, testimonial, pricing, profile, status, tags, feature, FAQ e seções inteiras com exemplos em estado. A janela de espécime `clamp(360px,60vh,620px)` e scene `clamp(440px,72vh,780px)` são dimensões do catálogo.
- **Layout:** componente comercial convencional, navegação Overview/Components, sidebar no catálogo, grids de 2 colunas e cenas grandes. Usar laranja com parcimônia para manter hierarquia.

## NØEMA

- **Direção:** manifesto de laboratório; alterna void/paper, índices editoriais, HUD, placas, rings, grids e halos.
- **Cores publicadas:** void `#050506`, segundo void `#0B0B0D`, paper `#F1F0EA`, cinzas paper `#CFCEC8` e `#E7E5DE`, electric `#6C63FF`, signal `#A9A5FF`, status `#7BFF82` (glow `.7`). Electric enfatiza CTA/orb/ticker; signal indica progresso/HUD; verde é status.
- **Medidas do catálogo:** nav 68px; sidebar 236px; largura de conteúdo máxima 1180px; padding de main `3.2rem clamp(1.2rem,3.4vw,3.4rem) 10rem`; espaçamento entre grupos 7.5rem.
- **Superfícies:** nav/sidebar dark translucent `.86–.88`; blur 14–16px, às vezes saturate 1.1; outline fino. Títulos display com tracking negativo, labels mono.
- **Limite importante:** só existem dois HTMLs; `overview/index.html` referencia `assets/noema-ai-studio-74.aura.build/noema.css`, ausente. Valores e comportamento aqui vêm do catálogo HTML, não de uma página executada.

## TerraSprint

- **Direção:** comercial, clara e natural; ground areia `#EAE7DD`, tinta `#232427`, graphite `#2E3034`, verde `#3F7D53`/`#2F6844`, pine gradient `rgb(47,74,58)→rgb(22,37,28)`.
- **Nav capsule exata:** fixed top 1.25rem, max width 880px, `calc(100% - 2rem)`, radius 36px, branco `.78`, blur 18px, borda graphite `.08`, highlight inset e shadow exterior.
- **Cards documentados:** service white radius 24px, border `.06`, inset highlight e sombra `0 14px 28px -18px rgba(35,36,39,.25)`; case radius 28px e shadow `0 20px 40px -22px`; package panel radius 36px, cards radius 26px; pills radius 999px.
- **Superfícies/acentos:** `#F4F5F5` nos wells; green tint `.08`/borda `.18`; painéis de case rosa (`#F7EEEA→#F1DED6`) e azul (`#EAF0F7→#DCE6F2`); vermelho `#E34A32` em gráfico. Hero usa radial blooms e chuva em canvas.
- **Tipografia:** intenção Fraunces + Manrope + Geist; há divergência real com `Source Serif 4` inline, explicada em `02-typography.md`.

## Regras comuns extraídas

1. Definir tokens por papel semântico (surface, ink, muted, action, status, overlay), não apenas por nome de cor.
2. Um projeto deve adotar uma única linguagem coerente de radius, sombra e acento; não fundir as quatro identidades.
3. Catálogo bom demonstra contexto, variantes e estados, não só swatches.
4. Tokens/fragments de Tailwind e Framer são evidência da fonte; mapear para API própria antes de reutilizar.

## Escalas e tokens de aplicação futura (proposta, não extraídos)

As referências não oferecem um sistema completo e coerente de steps cromáticos/spacing compartilhado. Não preencher as lacunas fingindo que uma escala existia. Como ponto inicial neutro para **um novo projeto**, pode-se usar escala de espaço 4/8/12/16/24/32/48/64/96/128px, associar nomes semânticos e ajustar após layout real. Essa proposta não pertence a nenhuma das quatro marcas.

```css
:root {
  /* Primitive palette: valores reais precisam vir da direção escolhida. */
  --space-1: .25rem; --space-2: .5rem; --space-3: .75rem;
  --space-4: 1rem; --space-6: 1.5rem; --space-8: 2rem;
  --space-12: 3rem; --space-16: 4rem; --space-24: 6rem;
  --content-reading: 68ch;
  --container-wide: 75rem;
  --grid-columns: 12;
  --grid-gutter: 1.5rem;
  --radius-control: .75rem;
  --radius-card: 1.5rem;
  --duration-fast: 150ms;
  --duration-ui: 250ms;
  --duration-enter: 400ms;
  --ease-standard: cubic-bezier(.2, .7, .2, 1);
}
[data-theme="light"] {
  --surface: var(--palette-paper);
  --surface-raised: white;
  --text-primary: var(--palette-ink);
  --text-muted: var(--palette-muted);
  --action: var(--palette-accent);
  --border: var(--palette-border);
}
[data-theme="dark"] {
  --surface: var(--palette-void);
  --surface-raised: var(--palette-surface-dark);
  --text-primary: var(--palette-paper);
  --text-muted: var(--palette-muted-dark);
  --action: var(--palette-accent-dark);
  --border: var(--palette-border-dark);
}
```

`--palette-*` deliberadamente não recebe valores inventados: selecionar uma única referência e validar contraste primeiro. Tema claro/escuro precisa recalcular estados e focus ring; inverter os RGB automaticamente não mantém contraste nem semântica. Separar primitive tokens (`--palette-*`) de aliases por função (`--surface`, `--text-primary`, `--action`) e tokens de componente.

Estados semânticos também devem ter pares de foreground/surface e ícone/texto, sem depender exclusivamente de hue: `--state-success`, `--state-warning`, `--state-danger`, `--state-info`; `--action-default`, `--action-hover`, `--action-active`, `--action-disabled`, `--focus-ring`. As quatro referências **não fornecem uma escala completa de estados globais**. Terra usa signal red em gráfico; Hanzo green em status; NØEMA green em status online. Não atribuir automaticamente essas cores a erro/sucesso fora desse contexto. Tokens de estado precisam de validação de contraste e testes em light/dark.

## Critérios de contraste — checagem numérica das cores sólidas

Razões calculadas pela fórmula de luminância relativa sRGB para cores opacas declaradas (não screenshots nem transparência). Isso verifica os pares; não certifica a interface inteira.

| Par | Razão aproximada | Interpretação WCAG AA para texto |
|---|---:|---|
| Elicyon black / cream `#000`–`#F4F2EE` | 18.78:1 | passa texto normal |
| Elicyon black / blue `#000`–`#6E89C8` | 6.08:1 | passa texto normal |
| NØEMA void / paper `#050506`–`#F1F0EA` | 17.84:1 | passa texto normal |
| NØEMA void / signal `#050506`–`#A9A5FF` | 9.23:1 | passa texto normal |
| NØEMA void / green `#050506`–`#7BFF82` | 15.98:1 | passa texto normal |
| Terra ink / ground `#232427`–`#EAE7DD` | 12.54:1 | passa texto normal |
| Terra deep green / white `#2F6844`–`#FFF` | 6.59:1 | passa texto normal |
| Terra primary green / white `#3F7D53`–`#FFF` | 4.92:1 | passa texto normal por pequena margem |
| Terra graphite / ground `#2E3034`–`#EAE7DD` | 10.68:1 | passa texto normal |

Texto com opacity, imagem, gradient, glass ou interação precisa ser calculado contra a cor efetivamente composta. WCAG 2.2 AA usa 4.5:1 para texto normal e 3:1 para texto grande; controles não textuais também têm critério de contraste próprio. Ver capítulo [08](08-responsive-and-accessibility.md).
