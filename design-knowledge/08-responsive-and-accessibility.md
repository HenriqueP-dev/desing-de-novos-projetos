# 08 — Responsividade e acessibilidade

## Breakpoints encontrados

| Referência | Breakpoints explícitos | Efeito observado |
|---|---|---|
| Elicyon | CSS 768, 900, 1023/1024, 1100px; classes md/lg | headings/hero reposicionados em 768; header 102px abaixo de 1024; menu toggle abaixo de 1024; overlays de equipe variam em 1024; ajustes em 900/1100 |
| Hanzo | Framer CSS max 809px; catalog CSS media rules | presets tipográficos reduzidos (ex. h4 20→18px); layout/cenas mudam por preset. Outros breakpoints não extraídos |
| NØEMA | catalog max 900/420px; notas da página 600/768px | nav/sidebar compactam em 900; gaps em 420; cue hidden ≤600; pin de anatomy só ≥768. São evidências distintas do CSS do catálogo e das legendas da página |
| TerraSprint | Tailwind `sm/md/lg` (valores default inferíveis: 640/768/1024) | nav/menu mobile vs desktop em md; chips/cards flutuantes em lg; layouts split em md; tipo fluido via clamp |

Breakpoints Tailwind acima de md/lg são **inferência baseada no preset padrão**, não valor CSS local explicitamente declarado.

## Padrões responsive extraídos

- Elicyon altera composição de linha e alinhamento, não apenas escala de fonte; oculta cursor em dispositivos sem hover e substitui nav por menu.
- Hanzo ajusta typography presets, mas cópia não basta para garantir comportamento em todo mobile; inspecionar card stack e menu no runtime.
- NØEMA remove ou reconfigura coluna lateral e algumas cenas em viewport estreita; algumas pin animations são bloqueadas abaixo de 768px. O overview original está sem stylesheet local.
- TerraSprint troca nav por botão/sheet, remove floating cards e empilha CTAs/seções; cards e painéis têm variantes fluídas. O catálogo limita partículas em viewport <768 a 40 em vez de 70.

## Acessibilidade observável

- **Elicyon:** menu e consent aparecem semanticamente; cursor decorativo oculto em hover:none; necessário disabled/checked; imagens têm alt em exemplos. Não encontrei regra de reduced-motion confirmável.
- **Hanzo:** clones de logos recebem `aria-hidden`; links e buttons presentes; markup exportado tem muitos SVG decorativos/Framer. Catálogo não prova completo teclado/aria de cada variant.
- **NØEMA:** `aria-expanded`, label muda Open/Close, Escape fecha menu; capability list responde a focus; progresso/cenas precisam de alternativa textual; reduced motion é explícito (loader off, GSAP off, clips abertos). Cursor customizado é decorativo.
- **TerraSprint:** nav com label, menu com aria-expanded, canvas com `aria-hidden`, botões/links nomeados; script consulta `prefers-reduced-motion`; documentação recomenda reduzir ou desativar efeitos. `aria-label` deve refletir estado (há label Open menu no exemplo).

## Verificações necessárias ao implementar

1. Contraste de texto e foco em cada superfície, incluindo crops/scrims e vidro.
2. Ordem de tab, focus-visible, Escape/fechamento e gestão de foco ao abrir menu/sheet.
3. Menu mobile com alvo de toque confortável; hover nunca como único feedback.
4. Labels e erros associados a input; live status de submit, loading e sucesso.
5. Tickers/pinned scenes não devem roubar scroll; alternativa linear e pausa para movimento reduzido.
6. Imagens com alt funcional ou `alt=""` quando puramente decorativas; canvas/ornamentos `aria-hidden`.
7. Não depender de cursor customizado, cor, animação ou blend para comunicar estado.
8. Zoom 200%, reflow, preferência de contraste e orientação vertical/horizontal.

Essas verificações são recomendações para o futuro; não são alegações de conformidade WCAG das referências.

## WCAG 2.2: critérios práticos para revisão

WCAG 2.2 é uma recomendação W3C; verificar a norma aplicável ao contexto legal/produto. Destaques relevantes: texto normal contraste mínimo 4.5:1; texto grande 3:1; controles e gráficos significativos têm critério de contraste não textual; não usar só cor; foco não pode ficar totalmente obscurecido (2.4.11 AA); dragging deve ter alternativa de pointer simples (2.5.7 AA); target mínimo 24×24 CSS px ou exceção aplicável (2.5.8 AA). Requisitos de focus appearance específico são AAA, não confundir com 2.4.7 Focus Visible. Veja [WCAG 2.2](https://www.w3.org/TR/WCAG22/) e [novidades de 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/).

O cálculo de pares sólidos observados está em [01-design-system.md](01-design-system.md). Ele não cobre pixels antialiased, opacidade, imagem, texto fino, disabled ou estados de focus. Calcular o resultado composto real e revisar no modo alto contraste.

## Semântica e ARIA

- Preferir HTML nativo (`button`, `a`, `input`, `label`, headings, `nav`, `main`, `dialog`) antes de adicionar roles.
- ARIA nomeia estado/relação; não cria comportamento keyboard automaticamente. Menu customizado exige roving focus/keyboard conforme padrão real, enquanto nav de site costuma ser lista de links simples.
- Para accordion, usar button dentro de heading, `aria-expanded`, `aria-controls`, e conteúdo associado; seguir [WAI-ARIA APG accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).
- Para tabs, selecionar padrão manual ou automático conscientemente e implementar arrows/Home/End; APG dá padrões por widget em [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/).
- Modal: nome acessível, foco contido/enviado de volta, Escape quando permitido, background inerte e body scroll controlado.
- `aria-live` apenas para feedback assíncrono relevante, sem anunciar cada atualização de contador/animação.

## Movimento reduzido

`prefers-reduced-motion: reduce` reflete preferência do sistema; remover/reduzir movimento não essencial, especialmente zoom/pan/parallax e loops. Não trocar apenas duração para um loop infinito; pausar, retirar ou substituir por estado estático. Preservar informação e feedback. MDN documenta o recurso e possíveis gatilhos vestibulares: [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion). Nas refs, NØEMA desliga GSAP/loader e abre clips; Terra checa a media feature; Elicyon/Hanzo não têm suporte global demonstrado no snapshot.

## Mobile e interação por ponteiro

- WCAG target size AA: mínimo 24×24 CSS px, sujeito às exceções normativas. Para usabilidade touch, pode-se escolher alvos maiores em controles primários, mantendo espaçamento suficiente.
- Não depender de hover, pointerfine ou cursor customizado; tap deve oferecer acesso equivalente a conteúdo/ação.
- Dragging deve ter alternativa por botão, stepper ou click/tap quando tecnicamente aplicável.
- Reflow, zoom, teclado virtual, autofill e rotação precisam de verificação real em device/emulador; breakpoint CSS não prova experiência mobile completa.
