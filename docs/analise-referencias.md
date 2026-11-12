# Análise de referências do projeto

**Data da análise:** 12 de novembro de 2026  
**Escopo:** todos os quatro diretórios encontrados na raiz do workspace.  
**Abordagem:** leitura dos HTMLs de sistema/catálogo e páginas de overview, inspeção das folhas e scripts locais legíveis, inventário de formatos/tamanhos e inspeção visual de todas as imagens raster locais por folhas de contato. O material original não foi alterado.

## 1. Resumo executivo

As referências não formam um único estilo. Elas apresentam quatro direções que atendem a intenções diferentes:

- **Elicyon:** luxo residencial editorial; fotografia quente, tipografia própria, ritmo espaçoso, navegação discreta e transições elegantes.
- **Hanzo:** estúdio digital/AI com repertório de produto; sistema versátil de componentes, base neutra, acento laranja intenso e linguagem de site de agência construído no Framer.
- **NØEMA:** laboratório criativo com linguagem cinematográfica e experimental; contraste entre “void” escuro e papel claro, verde elétrico/violeta, interação ambiental e movimento como parte do conteúdo.
- **TerraSprint:** consultoria/serviço ligado a crescimento sustentável; interface clara, verde e natural, cards amigáveis, cápsula de navegação translúcida e uma camada atmosférica de partículas.

O repertório mais reutilizável é metodológico: manter uma paleta curta com papéis claros, tipografia semântica, componentes com estados reais, responsividade explícita e movimento que revele conteúdo sem bloquear uso. As identidades visuais devem continuar separadas; a combinação indiscriminada de serifas de luxo, painéis de vidro, acento ácido e motion cinematográfico tornaria o projeto incoerente.

## 2. Inventário

| Pasta | Arquivos | Conteúdo principal | Leitura da cópia |
|---|---:|---|---|
| `elicyon-design-system/` | 114 | Catálogo detalhado; overview Next.js salvo; 37 WebP, 23 JPG, 10 PNG, 2 GIF, 4 SVG, fontes, CSS e JS empacotados | Ampla para estudar sistema e fotografia; runtime original foi salvo junto de bundles/ativos |
| `hanzo-design-system/` | 120 | Catálogo; overview Framer e cópia do site; 51 JS, 19 MJS, 24 imagens raster, 6 SVG, 8 fontes, JSON, CSS | Ampla em ativos; markup e estilos são majoritariamente exportados/gerados pelo Framer |
| `noema-ai-studio-74-design-system/` | 2 | Catálogo de sistema e overview | Incompleta para executar: o overview referencia `assets/noema-ai-studio-74.aura.build/noema.css`, mas esse arquivo e os demais ativos não aparecem na pasta |
| `terrasprint-ai-design-system/` | 29 | Catálogo, overview HTML, cenas/scripts, estilos, ícones, fontes e imagens | Relativamente completa e legível; há cópias locais de bibliotecas CDN e ativos |

### Arquivos de entrada e função

- **Elicyon:** [`design-system.html`](../elicyon-design-system/design-system.html) documenta tipos, cores, fundos, ícones, ações, navegação, formulários, cards, grupos de conteúdo, mídia e overlays. [`assets/overview/design-system.html`](../elicyon-design-system/assets/overview/design-system.html) é a página original salva; [`assets/overview/STACK.md`](../elicyon-design-system/assets/overview/STACK.md) registra a análise de stack presente na própria referência.
- **Hanzo:** [`design-system.html`](../hanzo-design-system/design-system.html) contém doze grupos, de tipografia a seções completas. [`assets/overview/index.html`](../hanzo-design-system/assets/overview/index.html) e [`assets/overview/assets/hanzo.framer.website/index.html`](../hanzo-design-system/assets/overview/assets/hanzo.framer.website/index.html) são páginas/exportações salvas. `assets/catalog/fonts.css` incorpora fontes; `framer-ssr.css` preserva CSS gerado pelo Framer; `assets/_wd3/{tech,site-index,manifest,fidelity}.json` são metadados da captura.
- **NØEMA:** [`design-system.html`](../noema-ai-studio-74-design-system/design-system.html) documenta tipos, superfícies, motion, navegação, ações, feedback, indicadores, conteúdo e cenas. [`assets/overview/index.html`](../noema-ai-studio-74-design-system/assets/overview/index.html) é o overview de referência e aponta para a folha de estilo local ausente.
- **TerraSprint:** [`design-system.html`](../terrasprint-ai-design-system/design-system.html) cataloga tipos, paleta, superfícies, movimento, ações, navegação, badges, cards, dados, formulário e mídia. [`assets/overview/index.html`](../terrasprint-ai-design-system/assets/overview/index.html) contém a página de overview; `assets/catalog/catalog.js`, `catalog.css` e `catalog-scenes.js` ligam o catálogo aos exemplos e descrevem detalhes de implementação.

### Ativos secundários

Os ativos não são material descartável: ajudam a entender conteúdo, tecnologia e intenção. Elicyon tem dezenas de renders/fotos de interiores, objetos e ambientes, mais wordmarks/ícones SVG, fontes e bundles de páginas. A folha de contato mostra imagens de salas, quartos, cozinhas, mobiliário, objetos decorativos, detalhes arquitetônicos e composição de móveis recortados sobre fundo colorido/escuro; há duplicatas em resoluções/crops diferentes e GIFs de 1×1 que parecem pixels de tracking, não peças visuais. Hanzo inclui mockups de produtos web/mobile, trabalhos de marca, screenshots de interfaces e retratos de equipe; ativos repetidos refletem variações de CDN/captura. TerraSprint inclui uma fotografia de paisagem verde em miniatura (referenciada pelo overview), um avatar 40×40 e favicon; os demais efeitos são desenhados em canvas/CSS/HTML, não por um grande acervo de fotos. SVGs e ícones carregados localmente também pertencem às referências, embora não sejam rasterizáveis numa folha de contato.

A pasta Hanzo inclui `assets/overview/assets/api.framer.com/auth/web/access-token__q764a0ac0.json`. Esse arquivo parece ser um artefato de autenticação da captura, não uma especificação visual; seu conteúdo não foi aberto nem reproduzido neste relatório.

## 3. Análise individual

### 3.1 Elicyon — luxo residencial editorial

**Propósito observado.** Apresentar um estúdio de interiores de alto padrão por meio de projetos, serviços, equipe, journal e contato. A prova de qualidade é predominantemente visual: fotografia de interiores e objetos ocupa grandes áreas; o texto nomeia e enquadra a experiência.

**Identidade visual observada.** A base declarada é creme `#F4F2EE`, com texto preto e azul dessaturado `#6E89C8` no footer, painel de consentimento e camada de revelação do hero. Ouro `#907533` aparece no cursor; terracota `#8D5D52` é usada no frame de um slider de objetos. Imagens quentes — madeira, pedra, tecidos neutros, iluminação suave — dão unidade à fotografia. A paleta não depende de muitos botões coloridos: fundo e fotografia fazem o trabalho de marca.

**Tipografia e composição.** O catálogo identifica uma fonte display proprietária “Elicyon” para títulos e wordmark, e “Antique Legacy” para corpo, links e rótulos. Displays tendem a caixa alta e escala responsiva; textos auxiliares usam tracking amplo e tamanho reduzido. Há exemplos concretos, como hero display em 7.5vw/64px, labels em 12px/10px e corpo em 14px com line-height próximo de 115%. As linhas de título são deliberadamente quebradas e deslocadas horizontalmente; o offset cria uma assinatura editorial, em vez de uma grade rígida. Letras separadas em spans permitem revelar palavra/letra individualmente.

**Estrutura e componentes.** Cabeçalho discreto sobre fotografia; menu que muda para toggle abaixo de 1024px; hero em tela cheia; mosaico de serviços; statements; projetos/carrossel; equipe; journal cards; chamada final emoldurada; footer-wordmark enorme; newsletter minimalista e painel de consentimento. As fotografias são recortadas em proporções distintas, com overlays em níveis documentados de 10%, 20% e 30% conforme o fundo e o breakpoint. O fechamento usa borda creme larga em torno da imagem e CTA central, transformando o espaço negativo em moldura física.

**Interação e responsividade observadas.** Links e botões usam sublinhado animado que encolhe da esquerda para a direita no hover; links de navegação reduzem opacidade; há cursor customizado em desktop, ocultado em dispositivos sem hover. O catálogo identifica Lenis para scroll suave e GSAP/ScrollTrigger para parallax, reveals e carrossel de projetos fixado durante parte do scroll. Cabeçalhos aparecem linha por linha; caracteres do wordmark sobem ao entrar no viewport. Em telas menores, conteúdo e navegação se rearranjam, offsets e corpos mudam e há scrims diferentes para preservar legibilidade.

**O que funciona particularmente bem.** O sistema tem intenção única e consistente: poucos acentos, fotos fortes, tipografia de marca e ações silenciosas. A fotografia dá contexto antes de qualquer explicação. Os offsets tipográficos e o cursor adicionam personalidade sem exigir um grande repertório de componentes coloridos. A moldura da chamada final faz o CTA parecer parte do projeto editorial.

**Pontos de atenção observados.** A legibilidade de texto sobre fotografia depende dos scrims e da imagem escolhida; reutilizar esse padrão exige checar cada crop. O azul é uma escolha incomum para a categoria residencial, mas aqui aparece em zonas específicas, sem competir com a fotografia. O catálogo registra uma classe de subtítulo (`text-type-dark/60`) sem regra correspondente no CSS compilado e observa que o texto acaba herdando preto — sinal de que exemplos da referência também podem conter inconsistências. O markup de alguns exemplos de CTA coloca `<button>` dentro de `<a>`; isso deve ser tratado como artefato observado, não como padrão de implementação a copiar.

**Tecnologia identificável.** A análise local `STACK.md` aponta Next.js/React, Tailwind, Sanity para conteúdo/imagens, GSAP/ScrollTrigger, Lenis, fontes WOFF2 proprietárias, rastreamento e formulário/consentimento. São evidências da captura, não uma recomendação para adotar essas dependências. O catálogo inclui código de remapeamento offline de imagens Sanity/Next para ativos locais.

**Inferência.** A direção privilegia confiança, acabamento material e desejo aspiracional. O movimento é usado como extensão de composição editorial; a conversão não toma a frente da narrativa.

### 3.2 Hanzo — estúdio digital e repertório de produto

**Propósito observado.** Site de estúdio que apresenta processo, trabalho/cases, equipe, planos, perguntas frequentes e contato. O catálogo vai além de tokens e monta exemplos de serviços, case study, depoimento, pricing, perfil, FAQ e seções inteiras — útil para estudar padrões de marketing de uma agência digital.

**Identidade visual observada.** O sistema usa uma base de cinzas e pretos (`#D9D9D9`, `#E3E3E3`, `#2B2B2B`, `#262626`, preto e branco), com laranja vivo `#FF3700` e verde `#0CB300` em estados/acento. O conteúdo visual é heterogêneo de propósito: identidades coloridas, telas de produto, mockups, pessoas e exemplos de sites. Há uma moldura/frame escuro para destacar superfícies e projetos. Isso posiciona o estúdio como plural e orientado a execução, em vez de impor uma estética única a todos os clientes.

**Tipografia e composição.** A captura Framer declara Inter/Inter Display e Instrument Serif; esta última funciona como contraponto editorial/display. A estrutura mistura headings grandes, corpo sans legível, microcopy mono em metadados e componentes compactos. A página se organiza por grupos numerados, com exemplos em contexto e navegação entre Overview e Components; os layouts são mais próximos de um sistema de marketing/SaaS convencional que os sistemas atmosféricos de Elicyon e NØEMA.

**Componentes e conteúdo.** Navbar, menu, botões, links sociais, process steps, cards de case, depoimento, preços mensal/custom, perfil, status, eyebrow, avatares, tags, toggle de preço, linhas de feature, chips, listas de benefícios/experiência, biografia, desenhos/scribbles e itens de FAQ fechados/abertos. Exemplos de componentes com estados tornam visível como o sistema se comporta e ampliam o valor da referência para aplicações reais.

**Interação observada.** A marcação mostra hover/variants do Framer, itens com `will-change: transform`, menus e estados de FAQ. Há slides/tickers de logos e trabalhos, títulos com letras separadas, animação/entrada de palavras e cenas de seções vivas no catálogo. A família de ícones carregada é Phosphor. Os metadados e bundles indicam construção/exportação com Framer; `motion` e componentes de React aparecem nos arquivos empacotados, mas os nomes dos bundles não permitem atribuir cada efeito sem examinar o runtime.

**O que funciona particularmente bem.** É a referência mais ampla para inventariar componentes de produto e seções comerciais. Os exemplos de estado aberto/fechado, toggles, menus e pricing ajudam a evitar um catálogo apenas decorativo. A variedade dos cases reforça o papel do estúdio como parceiro de vários setores. A hierarquia numérica e a navegação por grupo tornam um material extenso explorável.

**Pontos de atenção.** A paleta parece mais neutra do que “marca forte” até o laranja entrar; o acento precisa ser reservado a foco/ação para continuar significativo. Framer gera classes e markup de baixo sinal semântico, o que dificulta portar componentes diretamente. Alguns arquivos são de editor/runtime ou duplicatas da captura e não devem ser confundidos com código-fonte de produto. O JSON de autenticação listado acima é auxiliar e foi deliberadamente excluído da análise de conteúdo.

**Tecnologia identificável.** HTML/CSS e bundles gerados pelo Framer; React/Framer runtime, Inter/Inter Display, Instrument Serif e Phosphor icons são evidentes nos arquivos locais. `framer-ssr.css` e arquivos `.mjs` são artefatos gerados, não arquitetura que precise ser replicada.

**Inferência.** O objetivo é demonstrar amplitude e capacidade de execução. A linguagem visual mantém o palco neutro para permitir que portfólios de clientes muito diferentes convivam na mesma narrativa.

### 3.3 NØEMA — laboratório criativo, editorial e cinético

**Propósito observado.** Site de estúdio/consultoria com linguagem de manifesto e capítulos: hero, intro, processo e depoimentos, cases, about, pricing, FAQ e footer. O catálogo denomina cenas como “field”, “anatomy”, “collective”, “thesis”, “manifesto”, “living” e “protocol”, mostrando que a interface também deve comunicar método e ponto de vista.

**Identidade visual observada.** Tons quase pretos (`#050506`, `#0B0B0D`) formam o “void”; creme (`#F1F0EA`), cinza-papel (`#CFCEC8`, `#E7E5DE`) e superfícies de papel criam a outra metade. Verde ácido `#7BFF82` e violeta `#6C63FF`/lavanda `#A9A5FF` são sinais de alta energia e aparecem em contraste com a base contida. Textura/grão, placas recortadas, grid/scan, halos e rings são descritos pelos nomes das cenas e nos exemplos do catálogo.

**Tipografia e layout.** Os exemplos combinam frases curtas quebradas em linhas, palavras em itálico, títulos de manifesto e labels técnicos em monoespaçada (Courier New, pequeno, caixa alta e tracking). A composição funciona por páginas/capítulos e campos de informação, não por uma longa sequência de cards iguais. Elementos de HUD e números de seção sugerem interface de instrumento/estúdio. As fontes proprietárias não puderam ser confirmadas nesta cópia: a folha referenciada não está presente.

**Interações e motion observados.** Catálogo nomeia reveal de linhas mascaradas, menu-overlay sobre painel de papel, progress bar global que segue o scroll, cursor e ring que seguem o ponteiro, hover/focus em capability rows, progress rails, métricas que contam ao entrar, marquee/ticker em loop CSS, linhas em velocidades opostas, texto scrubbed, project track horizontal com zoom no hover e cenas que reagem ao movimento/scroll. Há estados ativos/inativos explicitamente exibidos. O menu tem `aria-expanded`, e o catálogo interage com a página embutida por `postMessage` para sincronizar menu, ponteiro e prontidão.

**O que funciona particularmente bem.** Motion aqui é sistema de navegação e linguagem, não mero adorno: trilhos, progresso e capítulos dão leitura espacial ao conteúdo. As duas superfícies (void/papel) permitem alternar intensidade sem trocar de identidade. O catálogo documenta cenas vivas e seus gatilhos, algo muito útil para compreender timing e estados.

**Pontos de atenção e limites de evidência.** A pasta tem apenas os dois HTMLs; o `index.html` aponta para `noema.css`, que não existe no snapshot. Não há raster, fontes ou scripts de origem locais para confirmar todas as declarações do overview visual. O movimento intenso é expressivo, mas demanda versão reduzida, fallback sem JavaScript, conteúdo acessível e testes de performance. O catálogo descreve muitas cenas como “Live”; nesta análise isso foi confirmado pela estrutura/documentação e scripts disponíveis no próprio HTML, mas a execução visual do site ausente não foi validada.

**Tecnologia identificável.** O overview aponta para exportação Aura (`noema-ai-studio-74.aura.build`), porém o arquivo CSS principal está ausente. HTML do catálogo confirma dependência de iframe/comunicação por `postMessage`; os mecanismos da página original não são totalmente identificáveis somente com o snapshot.

**Inferência.** A direção quer que o visitante sinta uma prática autoral e experimental antes de ler a oferta. Ela pode inspirar uma experiência narrativa, mas seria pesada como modelo-base para um produto utilitário ou painel administrativo.

### 3.4 TerraSprint — natureza, crescimento e interface amistosa

**Propósito observado.** Landing page de serviços com foco em crescimento sustentável e resultados: serviços, trabalho, pacotes/pricing, contato, comparativos e prova/dados. O conteúdo faz referência a eficiência/impacto e usa módulos de resultado/case como apoio à oferta.

**Identidade visual observada.** Fundo areia `rgb(234,231,221)`/`#EAE7DD`, tinta `#232427`, grafite `#2E3034` e brancos/neutros, com verdes profundos como ação (`#2F4A3A` a `#16251C`) e verde de destaque `#3F7D53`/`#2F6844`. Ilustrações/cases introduzem rosa-terra, azul claro e um vermelho `#E34A32` como marcador. Paisagem verde, partículas de chuva, bloom radial e pétalas no footer criam associação ambiental sem preencher todas as áreas com fotografia.

**Tipografia e estrutura.** A intenção declarada é Fraunces para display serif, Manrope para UI e Geist/Inter para base. Há uma diferença relevante no código: estilos da página/catalog apontam Fraunces, mas títulos inline referem `Source Serif 4`; logo, a identidade tipográfica exata não é uniforme na captura. Hierarquia usa títulos com `clamp()`, line-height compacto e contraste de serif display com sans funcional. Seções organizam serviço em grade de seis cards, pacotes em três opções, estudos em blocos comparativos e cartões com badges de status.

**Componentes e interações.** A nav é uma cápsula fixa (máximo 880px), branca translúcida, blur 18px e sombra dupla; no mobile, botão de menu abre sheet. CTA primário verde escuro usa gradiente/sombra inset, CTA secundário branco. Cards sobem levemente no hover; chips comunicam disponibilidade/status; formulário faz captura de e-mail. Hero inclui badge, título, CTAs, cards flutuantes inclinados e status compacto. A imagem de paisagem local é de baixa resolução (120×120) e funciona mais como apoio/thumbnail do que como asset hero de alta definição.

**Motion e tecnologia observados.** GSAP 3.12.2 e ScrollTrigger são locais; Tailwind Play CDN 3.4.17, Iconify/Solar, canvas 2D e pequenos scripts de catálogo também aparecem. A chuva/partículas e o efeito de guarda-chuva são ligados ao hero; bloom responde ao ponteiro; pétalas ocupam o footer. Reveals com IntersectionObserver começam em opacity reduzida/translateY 14px, duração 0.8s e stagger de 90ms. Cards flutuantes têm drift lento. O catálogo consulta `prefers-reduced-motion` e pausa efeitos quando fora de vista; isso é um bom padrão de desempenho e acessibilidade.

**O que funciona particularmente bem.** A interface equilibra uma sensação calorosa com leitura funcional. O nav de vidro está contido em uma forma simples e consistente; verde é reservado à ação e aos sinais de sustentabilidade. A atmosfera de partículas dá um diferencial proprietário ao hero sem depender de vídeo pesado. Pricing em três cápsulas com o plano central destacado comunica escolha de forma imediata.

**Pontos de atenção.** Gradientes, sombras internas, blur, partículas e cards inclinados podem acumular ornamento; o conteúdo deve continuar liderando. A discrepância de fontes pede resolução antes de transpor o sistema. Um menu móvel só é evidência de layout responsivo, não prova de que todas as seções foram verificadas em viewport real. Canvas precisa respeitar movimento reduzido e dimensionamento/uso de CPU, como o catálogo já tenta fazer.

**Inferência.** A natureza é usada como metáfora de crescimento contínuo: chuva, brotos/verde e pétalas associam resultado a ecossistema. A oferta e os indicadores mantêm a página comercialmente clara.

## 4. Comparação entre as referências

| Aspecto | Elicyon | Hanzo | NØEMA | TerraSprint |
|---|---|---|---|---|
| Tom | Refinado e material | Versátil e profissional | Autoral e imersivo | Próximo e otimista |
| Fundo dominante | Creme + fotografia | Cinza/preto/branco | Void escuro + papel | Areia clara + branco |
| Acento | Azul, ouro, terracota | Laranja, verde status | Verde ácido, violeta | Verdes naturais |
| Display | Serif proprietária / editorial | Inter Display + Instrument Serif | Contraste editorial/mono; fonte não verificável | Fraunces/Source Serif (inconsistência) + sans |
| Movimento | Scroll narrativo e parallax | Hover/entrada e showcases | Progressão cinética intensa | Atmosfera canvas e reveals moderados |
| Centro do layout | Fotografia e projeto | Repertório de cases e componentes | Capítulos e cenas | Oferta, cards, pacotes e prova |
| Melhor referência para | luxo/fotografia/ritmo | inventário de componentes/marketing | storytelling/interação | landing comercial/responsividade |

**Padrões recorrentes observados:** hero tipográfico dominante, chamadas claras, navegação que reduz peso visual, alternância entre texto e mídia, seções com rótulos/eyebrows, componentes arredondados ou minimalistas consistentes dentro de cada sistema, adaptação mobile e motion associado ao scroll/hover. Três usam transições ou reveals; todos tentam criar personalidade sem depender de um layout denso de controles.

**Diferenças que devem permanecer claras:** Elicyon e NØEMA usam editorialidade de forma distinta — a primeira calma e material, a segunda escura e experimental. TerraSprint usa vidro e sombras suaves para proximidade comercial; não é compatível automaticamente com a austeridade de Elicyon. Hanzo precisa acomodar portfólios variados e por isso usa mais neutralidade. As quatro paletas podem ser contrastadas, mas seus acentos (ouro, laranja, ácido/violeta, verde) não devem ser fundidos num único conjunto.

**Combinações que podem funcionar:** a clareza de navegação e catalogação de Hanzo junto da hierarquia comercial de TerraSprint; a fotografia deliberada de Elicyon com seções de projeto de Hanzo; o progresso de capítulos de NØEMA em uma experiência editorial, simplificando a intensidade; motion discreto de TerraSprint/Elicyon sobre blocos informativos de Hanzo. O princípio compartilhável é a relação entre efeito e propósito, não os efeitos específicos.

**O que evitar reproduzir literalmente:** dependência de texto sobre imagens sem teste de contraste; movimento constante sem alternativa; múltiplas linguagens de radius/sombra simultâneas; quebra de linhas e offsets tipográficos manuais sem regras responsivas; exportações Framer ou bundles compilados como base de código; paletas concorrentes; dependências de tracking/consentimento sem necessidade funcional; assets de baixa resolução usados em grandes áreas.

## 5. Características visuais e técnicas mais relevantes

- **Paleta:** escolher tokens por função (surface, ink, muted, accent, border, overlay, status) e verificar contraste por par de uso. Elicyon demonstra como poucos tokens podem cobrir superfícies distintas; TerraSprint mostra um acento semântico; Hanzo reserva cores fortes a pontos de atenção.
- **Tipografia:** separar uma fonte de personalidade de uma fonte de interface; definir escala fluida e line-height legível; documentar tamanhos/uso e resolver conflitos entre CSS inline e nome do token.
- **Layout:** manter largura máxima e gutters coerentes; usar cards para agrupamentos reais; reservar grande escala e espaço negativo ao conteúdo mais importante; em mobile, reordenar e reescrever quando necessário, não só diminuir.
- **Interação:** fornecer estados default/hover/focus/active/disabled e aberto/fechado. Preferir transições de opacity/transform; comunicar expansão por `aria-expanded`; alvos de toque devem continuar confortáveis.
- **Motion:** definir uma assinatura curta (entrada, hover, progressão) e os gatilhos; respeitar `prefers-reduced-motion`; parar animações fora do viewport; não esconder informação essencial atrás de animação.
- **Mídia:** associar crop ao papel do componente, definir aspect ratio e fallback, verificar contraste de texto em cada fotografia e usar imagens de origem suficientemente grandes. SVG/local icon set melhora nitidez e consistência.
- **Implementação:** os artefatos mostram Next/React/Tailwind/GSAP/Lenis em Elicyon, Framer/React/Phosphor em Hanzo, Aura apontado mas incompleto em NØEMA, e HTML/Tailwind/GSAP/ScrollTrigger/Canvas/Iconify em TerraSprint. Isso descreve as capturas; não implica que as stacks sejam intercambiáveis nem que devam ser copiadas.

## 6. Skills avaliadas

A lista disponível no ambiente foi verificada antes da análise. Nenhuma Skill listada é voltada a análise de referências, design systems, UX/UI ou engenharia frontend. `imagegen` serve para gerar/editar bitmap, o que não era necessário para interpretar ativos existentes; as Skills de documentação OpenAI, pets, plugins e criação de Skills não se aplicam. Portanto, **nenhuma Skill foi utilizada**. A leitura direta de HTML/CSS/JS e a inspeção das imagens existentes eram suficientes e evitavam instalar ferramentas/dependências.

## 7. Oportunidades de aproveitamento

1. **Definir primeiro a direção de marca do projeto:** escolher qual das quatro sensibilidades é dominante, antes de selecionar componentes.
2. **Extrair um inventário funcional:** de Hanzo, mapear card, FAQ, pricing, status, toggles e prova social; documentar variantes e estados, sem trazer classes Framer.
3. **Construir uma hierarquia editorial:** aplicar a escala fluida e os offsets cuidadosamente controlados de Elicyon, se fotografia ou narrativa forem centrais.
4. **Planejar narrativa de scroll:** se o projeto for imersivo, adaptar de NØEMA apenas capítulos/progresso/reveals essenciais; garantir conteúdo linear utilizável sem motion.
5. **Desenhar uma linguagem de ação:** TerraSprint mostra contraste consistente entre CTA primário e secundário; o acento deve corresponder a uma ação principal real.
6. **Planejar ativos por breakpoint:** identificar quais fotos e crops serão necessários para hero, case, card e mobile; não presumir que um único corte funcione em todos.
7. **Auditar acessibilidade e acabamento:** contraste em mídia, foco visível, rótulos de formulário, menu móvel, movimento reduzido e estados de erro/sucesso.
8. **Registrar tokens e decisões:** publicar nomes, valores, usos permitidos, escala, breakpoints e motion; evitar tokens órfãos ou valores divergentes entre catálogo e página.

## 8. Recomendações consolidadas para a próxima etapa

Sem iniciar desenvolvimento, recomenda-se que a etapa seguinte transforme a análise em um brief de direção: (a) escolher uma referência líder e uma secundária; (b) definir público, tarefa principal e tom; (c) fixar paleta curta e pares de contraste; (d) escolher display/UI typefaces e uma escala responsiva; (e) desenhar a arquitetura de seções e estados; (f) estabelecer uma regra para fotografia/ilustração; (g) definir três ou menos famílias de movimento com alternativa reduzida; e (h) revisar comportamento mobile antes de detalhar os componentes.

**Síntese recomendada se o projeto ainda estiver aberto:** usar a organização de componentes e estados de Hanzo, a clareza de oferta e CTA de TerraSprint, e escolher *uma* das duas linguagens editoriais — Elicyon para sofisticação calma ou NØEMA para experiência experimental. Essa combinação é uma hipótese de trabalho, não uma característica observada em nenhum dos sites, e deve ser confirmada pelo objetivo e público do projeto.

## 9. Limites da análise

- O escopo foi definido pelo conteúdo encontrado nos quatro diretórios na raiz; não há outras pastas no workspace além dessas referências no momento do inventário.
- O site NØEMA não pode ser reproduzido por completo com a cópia local porque a folha principal e os ativos apontados estão ausentes.
- Uma folha de contato permite classificar o acervo raster, mas não substitui inspeção em resolução integral de cada fotografia ou comparação de crop em viewport real.
- Dependências e stacks são atribuídas somente quando há evidência no código, nos ativos ou no `STACK.md`; nomes de arquivos isolados não são prova de uso em produção.
- Esta entrega é uma análise estática das referências locais; não foi executada suíte de testes nem modificado código do produto.
