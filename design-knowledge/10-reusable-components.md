# 10 — Componentes reutilizáveis extraídos

Os nomes abaixo descrevem famílias candidatas; nenhum foi implementado nesta etapa.

## Navegação e estrutura

| Família | Origem/variações | Aparência/comportamento transferível |
|---|---|---|
| Header/nav | todas | Elicyon links sobre hero + toggle mobile; Hanzo wordmark pill + menu; NØEMA nav blend + status; Terra capsule glass + active anchor |
| Mobile menu/sheet | Hanzo, NØEMA, Terra | botão com estado acessível, panel overlay/sheet; NØEMA prova Escape/aria-expanded, Terra breakpoint md |
| Section index/progress | NØEMA, Hanzo catalog, Terra spy | current item, anchor routing, progress scroll; informar seção atual sem motion obrigatório |
| Footer | Elicyon, Terra | wordmark animado e newsletter/links; Terra footer bar compacta |

## Ações e feedback

- **Button:** primary/secondary, claro/sobre foto/dark (Elicyon/Hanzo); pine/white (Terra); link underline (Elicyon/NØEMA). Definir size, icon slot e states.
- **Icon button/menu toggle:** round em Hanzo/Terra; barras animadas em NØEMA; rótulo/accessibility e expanded state.
- **Badge/eyebrow/status:** status online verde em NØEMA; eyebrow tint Terra; status tab Hanzo; usar para categoria/estado, não decoração vaga.
- **Tabs/toggle:** consent tabs Elicyon; Monthly/Custom Hanzo; selected/default state explícito.
- **Tooltip/cursor indicator:** cursor badge Hanzo e cursor/ring Elicyon/NØEMA; oferecer label ou feedback acessível sem custom cursor.

## Conteúdo e cards

- **Service card:** Terra family of six (icon well, heading, summary, status/meta, lift hover); Elicyon service tiles fotografados.
- **Case study card:** Hanzo media + título/meta; Terra split card texto/visual e chart; Elicyon project slide com imagem e lettering.
- **Testimonial/profile:** Hanzo quote/testimonial e profile/avatar stack; conteúdo com atribuição clara.
- **Pricing card/group:** Hanzo monthly/custom e feature list; Terra trio com plano central destacado e CTA no rodapé; incluir toggle acessível se aplicável.
- **FAQ accordion:** Hanzo item fechado/aberto e FAQ list; botão semântico, `aria-expanded`, conteúdo associado.
- **Status/tag/chip/list:** Hanzo tags, service chips, feature row, benefit/experience lists; Terra meta pills/status.
- **Data display:** Terra proof band/mini bar chart; NØEMA metric countup/HUD. Valor não deve depender de animação.

## Formulários e overlays

- **Email capture/newsletter:** Elicyon name/email com underline e consent; Terra email capture. Definir label, validation, loading, success/error e privacy copy.
- **Consent manager:** Elicyon tabs/categories e required item; adaptar apenas quando produto realmente precisa de consentimento.
- **Modal/overlay:** NØEMA full menu wipe; Hanzo white menu card; Terra mobile sheet. Catálogos não comprovam modal genérico.
- **Tooltip:** não encontrado como componente explícito; oportunidade apenas se UX exigir.

## Mídia e componentes cinéticos

- **Image reveal/mask:** NØEMA hero circle e field image; Elicyon scrim/parallax; fallback sem animação.
- **Carousel/project track:** Elicyon scroll-pinned slides; Hanzo ticker/work gallery; NØEMA horizontal cases; controlar drag/keyboard e oferecer controle de pausa.
- **Marquee/ticker:** Hanzo logo ticker, NØEMA 24s ticker e velocity rows. Duplicar conteúdo visual com clones `aria-hidden`; oferecer pausa/reduced-motion.
- **Atmosphere layer:** Terra rain/petals/bloom canvas; decorativo, pointer-safe, reduzido em mobile/reduced-motion.
- **Section hero:** variações distintas: Elicyon foto; Hanzo manifesto de agência; NØEMA experiência interativa; Terra SaaS/consultoria comercial. Não criar um hero universal.

## API sugerida para biblioteca futura

Tokens semânticos + componentes pequenos (Button, Badge, Card, Input, Accordion, Nav) e composições de página separadas. Cada componente documenta intent, variantes, estados, breakpoint, motion e acessibilidade. Não portar nomes de classes/minified components diretamente dos exports.

## Contrato de estados recomendado

`hover` não existe em toque; `focus-visible` deve ser óbvio; disabled preserva legibilidade; loading bloqueia duplicidade sem deslocar layout. Estados de erro/sucesso têm texto, não dependem só de cor.

| Componente | Default | Hover / focus / active | Disabled / loading | Error / success |
|---|---|---|---|---|
| Button | hierarquia e label/icon | surface/elevação; focus ring; press curto | disabled nativo; loading anuncia e evita repetição | feedback fora do botão, além da cor |
| Link | destino e affordance de link | underline/contraste; foco visível | evitar disabled link; explicar restrição | destino inválido recuperável |
| Card | agrupamento, heading e conteúdo | se clicável, alvo/foco claro; se não, não simular click | conteúdo legível | feedback ligado à ação interna |
| Input | label persistente, hint | focus ring | distinguir readonly/disabled | erro com texto + `aria-describedby`; preservar valor |
| Form | instrução, campos e submit | foco sequencial | progresso sem perder dados; evitar re-submit | success anunciado; erros associados ao campo e resumo se muitos |
| Header/menu | landmarks e current location | ordem de foco acompanha visual | overlay modal controla foco; saída segura | `aria-current`/expanded atualizados |
| Modal | título, descrição, ações | foco contido quando modal; Escape se permitido | busy sem bloquear saída | anúncio sem perder foco |
| Accordion | heading button e estado | hover/focus; active expande | disabled só por regra real | erro no painel não deve colapsar/perder foco |
| Tabs | tab selecionada e panel | selected/focus visual | estado indisponível explicado | erro do panel não muda seleção |
| Carousel | slide atual/total | controles e foco | busy mantém geometria; limites disabled | imagem falha mantém alternativa textual |
| Tooltip | texto curto não essencial | abre por pointer e focus; dismissível/hoverable | — | conteúdo crítico não deve depender dele |
| Dropdown | label/valor atual | mouse e teclado | opção disabled identificada | erro de seleção instrui recuperação |
| Toast/feedback | status textual e prazo | dismiss control acessível | — | `role=status` para informação; alert apenas urgente |

### Regras de interação

- Button (`button`) executa ação; anchor (`a`) navega.
- Form tem label associado; validação no submit/blur sem interromper digitação a cada tecla; servidor continua autoridade; erro preserva o conteúdo.
- Modal identifica se é modal, move/restaura foco e controla o fundo. `aria-modal` não implementa o comportamento sozinho.
- Menu de navegação frequentemente é lista de links; não aplicar role `menu` sem a keyboard model completa do menu ARIA.
- Tabs/accordion seguem padrões de teclado APG. Carrossel não deve autoplay por padrão; se autoplay, expor pausa e parar em foco/interação.
- Tooltip abre em hover e focus; o usuário pode mover ponteiro para o tooltip sem ele desaparecer; mensagem essencial fica junto do controle.
- Card grid torna-se stack no mobile, preserva ratio da mídia e mantém hit area sem transformar elementos internos em alvos conflitantes.

Referências: [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/), [accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/). APG orienta autoria de widgets; não substitui WCAG ou HTML semântico.
