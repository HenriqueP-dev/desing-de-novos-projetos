# 05 — Interações e experiência

## Elicyon

- Header com links desktop e menu toggle abaixo de 1024px; o estado completo da navegação não foi extraído. Links reduzem opacidade em hover; a cor do header/wordmark varia sobre foto.
- Ações documentadas para superfícies claras, imagem, card, call, submit e consent. Underline de 1px usa pseudo-element scaleX 1→0/300ms; no catálogo o underline desaparece da esquerda para direita.
- Project carousel é pinned durante parte do scroll; pager usa cream 35% default/100% ativo. Há também objects slider com frame terracota.
- Newsletter captura nome/email. Consent tem tabs consent/manage/details e categorias necessary/preferences/marketing/unclassified; necessary é checked/disabled. Script local intercepta submit, portanto backend e estados sucesso/erro não podem ser afirmados.
- Cursor seta customizada segue pointer, blend difference; escondida em `hover:none`.

## Hanzo

- Navbar com pill de marca e botão circular; menu abre em painel branco. Catálogo tem links Overview/Components e sidebar com grupo atual.
- Botão primário em três fundos; menu toggle, cursor da galeria, links texto/sociais e variantes sobre fundo escuro.
- FAQ é demonstrado fechado/aberto; pricing permite Monthly/Custom. O visual do toggle está disponível, mas conteúdo/persistência não foram confirmados.
- Case/process/profile cards, status tab, avatar stack, tags, feature rows, chips e listas de benefits/experience podem ser ações ou informação. Não inferir clique sem destino/handler.
- Media inclui logo ticker e work gallery.

## NØEMA

- Menu overlay paper: botão `aria-expanded`, label Open/Close, Escape fecha. Painel wipe; links entram após delay; duas barras animam. Catálogo sincroniza menu e pointer com iframe por `postMessage`.
- Navbar fixa grid 1fr/auto/1fr, status online e mix-blend difference; progress bar segue scroll. Nav de catálogo atualiza item ativo; sidebar aplica indent e muda cor.
- Cursor dot/ring segue pointer; ring amplia sobre links, buttons, tabindex e hero. Decorativo, requer alternativa sem cursor.
- Hero revela a face humana dentro de círculo no pointer. Equivalente touch não está documentado.
- Capability rows respondem a hover **ou focus**, conectando lista ao viewer; modelo positivo de paridade keyboard.
- Project track horizontal segue scroll e dá zoom no hover. Rails, counters, ticker, text river e chapters também acompanham progressão.
- Loader conta e remove overlay; `ready` depende de loading e intro. O modo reduced-motion remove preloader.

## TerraSprint

- Nav capsule fixed; desktop links e CTA, mobile botão abre menu sheet. Botão expõe `aria-expanded`. Scroll spy marca section ativa. Anchors levam a serviços/work/packages/contact.
- CTA primary pine e secondary branco; hover sobe .5px, ícone desloca discretamente. Cards de serviço/case elevam ~1px; planos destacados com escala/cor pine.
- Hero flutuantes são informativos em desktop; cards são ocultados abaixo de lg. Canvas de chuva/guarda-chuva interage com pointer/click; bloom segue o pointer.
- Form captura email, mas não há estado visual verificável de sucesso, erro ou loading.
- Catálogo tem routes Overview/Components por hash e sidebar spy; isso é navegação do catálogo, não do landing.

## Lacunas e requisito para componentes futuros

Nenhuma captura demonstra estados completos para formulários vazios, inválidos, loading e sucesso. Não assumir affordance clicável por causa de hover. Para controls novos definir default/focus-visible/hover/active/disabled/loading/success/error; teclado, toque e leitor de tela não podem depender do efeito visual.
