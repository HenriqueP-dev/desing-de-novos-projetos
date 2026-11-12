# 04 — Inventário de motion design

**Limite:** parâmetros são os declarados em catálogos/código, não cronometragem em browser. Não há navegador interativo disponível e Noema está sem CSS original.

## Elicyon

| Efeito | Alvo e mudança | Trigger / timing | Reprodução e status |
|---|---|---|---|
| Heading line reveal | linhas de título reveladas em máscaras | entrada/scroll na seção; duração/easing não expostos | GSAP + ScrollTrigger ou IO/CSS; direção/amplitude não confirmada |
| Statement words | palavras/linhas em spans, offsets e translate3d | scroll/entrada; timing não documentado | timeline escalonada |
| Photo parallax | wrapper/container/inner via translate3d | `data-parallax`, scroll | GSAP/ScrollTrigger; magnitude não extraída |
| Project slider pinned | carrossel avança enquanto seção fica presa | ScrollTrigger pin; faixa não disponível | timeline ligada ao progresso; prever touch/teclado |
| Footer wordmark | letras sobem de translateY(110%), uma por uma | entrada do footer; stagger não quantificado | spans + overflow hidden + GSAP/CSS |
| Link underline | scaleX 1→0; origem esquerda→direita | hover, 300ms | pseudo-element CSS transform |
| Nav opacity | links 1→.5 | hover/seleção; `.25s` | CSS opacity |
| Cursor | SVG 14×16 fixed, blend difference, opacity `.2s` | pointermove; oculto `hover:none` | JS pointer; ocultar em touch |
| Imagem/consent | opacity de imagem `.25s`; panel `.3s` | hover/estado | CSS; backend não verificável |

Catálogo confirma reveals, parallax, pinned slider e wordmark. Não encontrei uma regra global `prefers-reduced-motion` verificável para Elicyon.

## Hanzo

- Título split-letter existe em spans; snapshot mostra estado final (opacity 1, blur 0, transform none). Ticker pill/logos repetidos usam `will-change: transform`; clones podem estar `aria-hidden`. Playback timing não está especificado.
- Cards, botões, ícones e menus têm variants/transforms Framer; easing/duração exatos não foram identificados em runtime.
- FAQ aberto/fechado, toggle Monthly/Custom e cenas do overview são apresentados. A sincronização de scenes pelo scroll é recurso do catálogo.
- Implementação: variants Framer ou CSS; ticker com CSS/GSAP se necessário. O export já contém runtime Framer, então não somar outra biblioteca só para hover.

## NØEMA — parâmetros publicados pelo catálogo

| Efeito | Início→fim | Gatilho e parâmetros | Técnica |
|---|---|---|---|
| Hero machine→human | clip circular 0→`clamp(115px,12vw,210px)` centrado no pointer | hover/mouse; duração não informada | duas imagens + `clip-path` e pointer coords |
| Anatomy image/grid | clip `inset(12% 18% round 24rem)`→`inset(0)`; brightness/saturation `.82→1`; scale `1.08→1.16`; scan line −42vw→42vw | pinned +240% a partir de 768px, scrubbed; notas em `.55/.92/1.28` | ScrollTrigger, clip, filter, transform, grid CSS |
| Field site | clip `inset(8% 6% 8% 42%)`→0; scale `1.1→1.18`; veil `1→.18`; title lines −14%/+16%; card sobe 90px | pin +210%, scrub | ScrollTrigger/CSS |
| Collective | círculo 15%→64%; brightness `.72`, saturation `.82`→1; scale `1.05→1.13`; 3 halos giram 120°/scale 1.18; counter 00→100% | progresso da seção | GSAP/tween declarado; SVG não confirmado |
| Manifesto line rise | linhas sobem/revelam por máscara | ao entrar; 1.1s `power4.out` ou .8s `power3.out`, stagger .1–.12 | GSAP + overflow/translate |
| Preloader | count 0→100: 1.5s `power3.inOut`; mark .45s `power3.out`; wipe `inset(0 0 100% 0)`, .9s `power4.inOut`, delay .12s | início | GSAP |
| Hero title/copy | título yPercent 115, 1.1s `power4.out`; eyebrow/lead/HUD .8s, stagger .08 | fim do loader | GSAP |
| Reveal de conteúdo | living steps y48; river foot y60; capability list x−55 | 1.1s `power4.out` / .8s `power3.out`; stagger .1–.12; capability stagger .09 | GSAP/ScrollTrigger |
| Metric count-up | contador, zero-pad em 2 dígitos | 1.4s `power3.out`, start `top 90%` | GSAP viewport trigger |
| Menu overlay | painel wipe de cima; links sobem 40px | panel .8s `power4.inOut`; links .6s `power3.out`, stagger .06, delay .3; bars .4s | clip-path + GSAP; click/Escape |
| Cursor/ring | dot 5px; ring 38px segue a .14 por frame; active 74px | pointer sobre alvos/hero | requestAnimationFrame lerp, blend difference |
| Signal ticker | loop | 24s linear infinito | CSS keyframes |
| Scroll cue | scaleX `.2↔1`, linha 2.7rem | 1.8s ease-in-out infinito; hidden ≤600px | CSS keyframes |
| Project track | cases deslocam horizontal; imagem amplia no hover | scroll/hover; zoom sem valor | ScrollTrigger + transform |
| Thesis/rings/text river | eixos/anéis; linhas em sentidos opostos; texto scrubbed | scroll; amplitude/tempo incompletos | transforms; SVG não confirmado |

`prefers-reduced-motion`: preloader removido, GSAP desligado e clips abertos. Verificar se loops CSS também param. Menu altera `aria-expanded` e label; barra 1 rotate 15°/y3, barra 2 −15°/y−4, width 68→100%, .4s.

## TerraSprint

| Efeito | Movimento e trigger | Parâmetros exatos | Técnica |
|---|---|---|---|
| Rise reveal | opacity 0 + y14px→visível/0; IO threshold .12 | .8s `cubic-bezier(.22,.61,.36,1)`, stagger 90ms | CSS + IntersectionObserver |
| Word reveal | opacity .1→1; blur 8→0; y20→0 | ScrollTrigger, stagger .08, scrub 1, `top 90%`→`bottom 60%` | GSAP 3.12.2 |
| Tile drift | y até −9px, rotate ±1.5° | WAAPI loop infinito ease-in-out, 5200ms + índice×900ms, delay índice×500ms | `Element.animate` |
| CTA/card lift | CTA y−.5px, card y−1px, arrow ±.5px | hover, 300ms | CSS transform |
| Bloom drift | radial bloom até ±13px x/±10px y | pointermove, transition .7s ease-out; desligado em reduced-motion | JS passivo + transform |
| Rain/umbrella | gotas/splashes e guarda-chuva em canvas 2D | pointer/click; 40 gotas <768px, senão 70; DPR máx. 2 | Canvas 2D |
| Petals | partículas no footer | ciclo/entrada; duração/quantidade não especificadas | Canvas 2D |
| Nav | capsule shadow muda | scroll; 500ms | CSS + scroll spy |

## Especificação de motion para uso futuro

Para cada animação registrar alvo, propriedade, estados inicial/final, direção/amplitude, duração, delay/stagger, easing, trigger, tecnologia, reduced-motion e fallback keyboard/touch. Preferir transform/opacity, pausar loops fora de viewport, e não ocultar informação essencial.

## Motion tokens para projeto futuro (proposta)

Os tempos não são uma média científica das marcas. Abaixo há **aliases iniciais** orientados pelos valores observados, a calibrar por distância e conteúdo; valores de grandes reveals/parallax devem ser escrubados pelo usuário, não imposto por uma duração fixa.

| Token sugerido | Valor inicial | Uso |
|---|---:|---|
| `motion-duration-instant` | 100ms | feedback de estado simples |
| `motion-duration-fast` | 150ms | hover/focus |
| `motion-duration-ui` | 250ms | underline, disclosure pequeno |
| `motion-duration-enter` | 400ms | menu icon/card transition |
| `motion-duration-reveal` | 800ms | entrada de seção |
| `motion-duration-editorial` | 1100ms | hero/display com intenção narrativa |
| `motion-duration-ambient` | 5200ms+ | drift raro; interrompível e decorativo |
| `motion-duration-marquee` | 24s | ticker contínuo, apenas se necessário |

```css
:root {
  --ease-standard: cubic-bezier(.2, .7, .2, 1);
  --ease-emphasized: cubic-bezier(.77, 0, .175, 1); /* Elicyon usa curva próxima em call */
  --motion-fast: 150ms;
  --motion-ui: 250ms;
  --motion-enter: 400ms;
  --motion-reveal: 800ms;
}
.interactive { transition: transform var(--motion-ui) var(--ease-standard),
  color var(--motion-ui) ease, background-color var(--motion-ui) ease; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important;
    animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
}
```

O snippet é um fallback amplo; produção deve preservar feedback de estado e substituir transformações grandes por dissolução/estado instantâneo quando apropriado. Não aplicar `transition: all` indiscriminadamente.

## Técnicas avançadas não observadas (orientação, não atribuição)

| Técnica | Funcionamento / quando usar | Evitar / performance / acessibilidade |
|---|---|---|
| Spring | resposta com massa/stiffness/damping que pode ultrapassar e estabilizar; útil em drag, sheet e feedback físico | não usar bounce em navegação formal; limitar overshoot e oferecer reduced motion. Motion/Framer Motion podem modelar spring; CSS comum não expressa spring físico nativamente em todos os ambientes |
| Exit/page transition | estado de saída persiste até terminar antes de desmontar/navegar | não atrasar navegação nem bloquear back/forward; garantir foco/título e destino; não observada nas referências |
| SVG morph/draw | stroke-dashoffset, transform ou interpolação de paths compatíveis; útil em ícone simples/logomark | path morph exige geometria compatível; não animar SVG gigante; manter nome/semântica fora do gráfico |
| 3D CSS | perspective + transform em uma peça pequena | evitar parallax de tela inteira e preservar leitura; custo de composição e risco vestibular. Referências não comprovam 3D real |
| WebGL/Three.js | cena GPU com meshes/shaders | apenas para conteúdo 3D indispensável; requer fallback, carregamento tardio, limite de DPR/GPU, pausa offscreen e controle de motion. Não comprovado nas refs |
| Cursor-driven | pointer position mapeia transform/clip/rotation | não tornar conteúdo inacessível em touch, não atualizar layout a cada evento; usar `requestAnimationFrame`, coarse pointer fallback e reduced-motion. NØEMA/Terra mostram casos reais |
| Text/image reveal | máscara, clip ou opacity/translate para construir entrada | não manter texto em `opacity:0` se JS falhar; reservar dimensões para CLS; foco não deve ficar em conteúdo invisível |
| Stagger | atrasar filhos em série (ex. 60–90ms nas referências) | sequências longas elevam espera e movimento; reduzir a lista e sincronizar com ordem de leitura |

### Estados intermediários e triggers

Para abertura de menu, documentar `closed → opening → open → closing`; impedir duplo click inconsistentes; sincronizar `aria-expanded` com painel visível e permitir Escape. Para scroll, optar por reveal-once (IO) quando a entrada não depende do progresso; scrub (GSAP ScrollTrigger) quando progresso espacial é parte do significado. Pin não deve quebrar wheel/touch/back navigation. Nenhuma referência inspecionada confirma transição entre páginas; não copiar uma especulação como descoberta.
