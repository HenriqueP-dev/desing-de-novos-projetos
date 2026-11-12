# 09 — Tecnologias e adequação de bibliotecas

## Evidência por referência

| Referência | Evidência local | Papel observado |
|---|---|---|
| Elicyon | `STACK.md`, HTML Next markup, `__NEXT_DATA__`, assets e scripts | Next.js/React, Tailwind, Sanity CDN, GSAP/ScrollTrigger, Lenis, fontes custom WOFF2; rewriter offline para imagens |
| Hanzo | Framer export/SSR, CSS, chunks `.mjs`, componentes de ícone | Framer + React runtime, Inter/Instrument Serif, Phosphor. Bundle gerado e código editorial misturados |
| NØEMA | Overview aponta para `noema.css`, `gsap.min.js`, `ScrollTrigger.min.js`, Aura build; apenas os dois HTMLs estão presentes | Aura/GSAP declarados pelo HTML/catalog; CSS e scripts apontados estão ausentes, então stack final não é completamente validável |
| TerraSprint | HTML, `catalog.js/css/catalog-scenes.js`, arquivos locais | HTML + Tailwind Play CDN 3.4.17, GSAP 3.12.2 + ScrollTrigger, Iconify Solar, canvas 2D, WAAPI, IntersectionObserver |

## Quando usar cada ferramenta

- **CSS transitions/keyframes:** hover, underline, reveal simples, ticker e estados locais. Menor custo/manutenção; suficiente para lift de card e loops simples.
- **IntersectionObserver:** revelar conteúdo uma vez quando entra na viewport, contadores e lazy activation. Não serve sozinho para sincronizar animação reversivelmente com progresso do scroll.
- **GSAP + ScrollTrigger:** timelines, pin, scrub, sequência por palavra, múltiplas camadas e ajuste fino de start/end. Adequado aos padrões Elicyon/NØEMA; manter número de triggers controlado e `refresh()` correto após layout.
- **Framer Motion / Motion:** variants React para menu, card, layout e estado de componente. Bom para app React/Framer com motion de UI; não necessário para páginas estáticas com poucas transitions. Não confundir presença de runtime Framer no export Hanzo com requisito do produto futuro.
- **Lenis:** scroll suave quando realmente melhora continuidade de uma experiência narrativa; exige integração com ticker/ScrollTrigger, fallback nativo, teclado e reduced-motion. Evitar por padrão em página utilitária.
- **Three.js/WebGL/shaders:** nenhuma referência local comprova uso. Usar somente quando houver objeto/ambiente 3D interativo essencial; custo de carregamento, acessibilidade e GPU alto.
- **Canvas 2D:** TerraSprint comprova chuva/pétalas. Apropriado a partículas leves e não semânticas; usar DPR limitado, resize lifecycle, pause offscreen e reduced-motion.
- **SVG:** ícones/logos/cursor nítidos e animáveis; boa opção para formas simples sem 3D.
- **Tailwind:** evidência forte em Elicyon/TerraSprint. Utilizar apenas se já escolhido no projeto; catalogar valores semânticos em config/tokens para evitar estilo arbitrário repetido.

## Performance e arquitetura

- Priorizar `transform` e `opacity`; filtrar/blur somente em áreas contidas.
- Lazy-load imagens/cenas abaixo da dobra e fontes não críticas; reservar aspect ratio para evitar layout shift. Isso é recomendação: estratégias observadas variam nos snapshots.
- Animações canvas não devem executar quando aba oculta/offscreen; Terra catalog já possui gate ativo/visível.
- Manter movimento em módulo de seção, desmontar listeners/timelines e honrar reduced-motion.
- Tratar bundles de framework/analytics/tracking como artefatos ou integração externa; não copiar automaticamente.

## Performance e Core Web Vitals

Metas publicadas pelo web.dev (percentil 75, separado por mobile/desktop): **LCP ≤2.5s**, **INP ≤200ms**, **CLS ≤0.1** para “good”. São métricas de campo; laboratório diagnostica, mas não substitui RUM. Lighthouse não mede INP com interação real; TBT é proxy de laboratório. Fontes: [Web Vitals](https://web.dev/articles/vitals) e [medição](https://web.dev/articles/vitals-measurement-getting-started).

| Sintoma | Ações técnicas úteis |
|---|---|
| LCP ruim | identificar elemento LCP; `<img>/<picture>` para imagem de conteúdo, comprimir e servir srcset; não lazy-load da imagem crítica; reduzir CSS/fonts bloqueantes |
| INP ruim | reduzir JS/long tasks; quebrar trabalho; evitar listeners de pointer pesados; usar RAF em movimento contínuo; pausar canvas/timeline fora da tela |
| CLS ruim | declarar dimensões/aspect-ratio; reservar espaço de fonte/mídia; evitar inserir conteúdo acima sem espaço; entrada por transform/opacity |

Lazy-load abaixo da dobra; não adiar hero/LCP sem análise. MDN recomenda dimensões explícitas mesmo para imagens lazy para evitar layout shift: [img](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img). `fetchpriority` é um hint, usar parcimoniosamente: [fetchpriority](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/fetchpriority). São recomendações, não atribuições às referências.

## Comparação de tecnologias

- **CSS transitions/keyframes:** estados e loops simples, sem dependência; ótimo para underline/card, menos adequado a timeline com sequência e sincronização de scroll.
- **IntersectionObserver:** reveal-once quando elemento entra; leve, não fornece progresso contínuo para scrub.
- **CSS scroll-driven animations:** timeline nativa `scroll()`/`view()` para progressão simples quando suporte atende; fallback recomendado. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations).
- **GSAP ScrollTrigger:** timeline, start/end, scrub, pin, snap e callbacks; adequado a Elicyon/NØEMA. Não animar o elemento pinned (animar descendentes), fazer cleanup em React. [Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/).
- **Motion (nome atual, anteriormente Framer Motion):** React/JS/Vue, springs, gestures, layout/scroll; bom para estados e gestos de componentes React. [Docs](https://motion.dev/docs). Evitar duplicar lib se CSS cobre a necessidade.
- **Framer Motion:** nome histórico/ecossistema React; não é o mesmo que Framer site builder observado em Hanzo. Na escolha atual, consultar a documentação Motion.
- **Lenis:** scroll wheel/programmatic suavizado; `respectReducedMotion` existe na configuração atual. Útil quando continuidade editorial é requisito; pode interferir com scroll nativo/nested scrollers e requer integração cuidadosa. [README](https://github.com/darkroomengineering/lenis).
- **Three.js/WebGL:** cena 3D via scene/camera/renderer; nenhuma referência local comprova uso. Usar se exploração 3D for essencial, com fallback, orçamento e controle de GPU. [WebGLRenderer docs](https://threejs.org/docs/pages/WebGLRenderer).
- **TypeScript:** não identificado nas referências; vale quando estado, domínio e APIs se beneficiam de tipos; não é requisito de landing estática simples.
- **Component libraries:** audit markup/keyboard antes de adotar; o material local mostra Phosphor em Hanzo e Iconify Solar em Terra, não uma biblioteca de componentes compartilhada.

## Prototipagem e inspeção futura

Figma para fluxos/specs; DevTools para computed styles, animation frames, network, accessibility tree e viewport; Lighthouse/Performance panel para laboratório; RUM para Web Vitals de campo; testes manuais com teclado/leitor de tela. Não havia navegador automatizado nesta sessão; páginas foram analisadas estaticamente e raster foi visualizado.

## Checklist de performance acionável

### Imagens e mídia

- Servir imagens responsivas com `srcset`/`sizes`; escolher tamanho por slot/dispositivo e formatos modernos com fallback do pipeline.
- Declarar `width`/`height` ou `aspect-ratio`; aplicar crop por `object-position`.
- A imagem crítica do hero/LCP não deve receber lazy loading. Use eager/default e `fetchpriority="high"` apenas após confirmar que é recurso crítico; priorização excessiva compete com fontes/scripts.
- Lazy-load imagens abaixo da dobra e cenas pesadas. Reservar ratio/placeholder previne CLS.
- Vídeo/canvas/WebGL deve ter poster/fallback e orçamento de bytes. O asset de paisagem Terra disponível é 120×120, adequado a thumbnail, não a um hero amplo.

Web.dev documenta [responsive images](https://web.dev/learn/design/responsive-images); MDN recomenda reservar dimensões em `<img>` para evitar reflow.

### Fontes

- Auditar famílias/pesos; remover variantes não usadas; preferir WOFF2 e subsetting Latin que mantenha diacríticos portugueses; verificar licença.
- Escolher `font-display` conscientemente: `swap` revela fallback rápido mas pode mudar métricas; `optional` pode manter fallback naquela navegação; `fallback` limita bloqueio/troca. Ajustar fallback com métricas compatíveis/`size-adjust` para diminuir mudança de layout.
- Preload somente da fonte realmente crítica acima da dobra; preload de todos os pesos compete por banda. `crossorigin` precisa corresponder à requisição da fonte.
- Cache longo para arquivos versionados. Monitorar LCP/CLS depois de mudanças.
- Fontes consultadas: [web.dev font best practices](https://web.dev/articles/font-best-practices), [optimize web fonts](https://web.dev/learn/performance/optimize-web-fonts).

### JavaScript e animações

- Separar chunks por rota/funcionalidade; carregar canvas/carousel apenas quando realmente usados. Code splitting reduz JS inicial, mas o chunk essencial solicitado só no click pode atrasar o gesto; antecipar com parcimônia quando intent é previsível.
- Medir cobertura, tree-shake/minificar/comprimir, cachear assets versionados e evitar libs/runtime duplicados.
- Desmontar listeners/timelines; usar passive listeners quando não cancela evento; agrupar pointer updates em RAF e evitar leitura/escrita de layout em cada evento.
- Preferir transform/opacity. `filter`, backdrop blur, shadow grande e clip-path precisam de perfilamento em áreas grandes. `will-change` seletivo e temporário, não global.
- Canvas: limitar DPR e partículas (Terra limita DPR a 2), pausar em aba oculta/offscreen e em reduced-motion; reduzir FPS quando full-frame não é necessário.
- ScrollTrigger pinned: atualizar measurements depois de fonts/images/layout; animar os filhos, não o próprio elemento pinado; cleanup em React.

Preload e code splitting devem ser medidos; preloadar tudo prejudica prioridades e divisão pode adiar código de interação. Consultar [preload critical assets](https://web.dev/articles/preload-critical-assets) e [JavaScript startup optimization](https://web.dev/articles/optimizing-content-efficiency-javascript-startup-optimization).
