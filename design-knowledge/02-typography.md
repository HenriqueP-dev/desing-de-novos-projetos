# 02 — Tipografia

Tamanhos abaixo são exatos quando o catálogo os imprime. Valores ausentes ficam explicitamente sem inferência.

## Elicyon

Famílias: **Elicyon** display e **Antique Legacy** corpo/UI; peso 400 documentado. Hierarquia amostrada:

| Papel | Estilo | Escala |
|---|---|---|
| Hero display | Elicyon 400 uppercase | 7.5vw / 64px |
| Letras de projeto | Elicyon, spans por letra | 11vw; variante 9.3vw |
| Wordmark | Elicyon uppercase | 18.2vw mobile / 19.8vw desktop |
| H2 section/statement | Elicyon | 48px desktop; exemplo mobile `.65` = ~31px |
| H3 projeto | Elicyon uppercase | 35px / 28px |
| H4 call | Elicyon | 26px / 23px |
| H5 card | Elicyon | 22px |
| Serviço | Antique Legacy uppercase, tracking `.1em` | 16px, line-height 100% |
| Nav/CTA | Antique Legacy, tracking `.15em` | 14px |
| Corpo | Antique Legacy | 14px, line-height 115%; exemplos limitados a 380px |
| Label | Antique Legacy uppercase, `.1em` | 12px / 10px |
| Legal | Antique Legacy | 10px, 115%, opacity 50% |

Quebras em spans e offsets manuais (36px em um exemplo) são assinatura editorial, não escala automática. O catálogo demonstra linhas diferentes em mobile e desktop.

## Hanzo

**Inter Display** carrega a maioria dos papéis, tracking `−.06em` em displays; **Instrument Serif italic** fica nos eyebrows. Stack sans `"Inter Display", "Inter Display Placeholder", "Inter", system-ui, sans-serif`; mono `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`. Presets Framer legíveis incluem 108/72/48/24/20px e line-heights 1.15–1.6em. Corpo: exemplo 16px/1.7em e 18px/1.5em. Regra responsive em `max-width:809px` reduz um preset h4 de 20px para 18px. São amostras/presets, não necessariamente escala global.

## NØEMA

No catálogo, título de seção usa `clamp(3.2rem,6.2vw,6.4rem)`, peso 500, tracking `−.08em`, line-height `.84`. Metadados mono/Courier New: `.6rem`, tracking `.12em`, line-height 1.65; índices de sidebar `.56rem` e labels `.64rem`/`.16em`. Frases são curtas, divididas em linhas, com palavras em itálico. Fonte da página original **não confirmável** pois CSS/fontes estão ausentes; as regras de catálogo não devem ser atribuídas automaticamente ao overview.

## TerraSprint

O catálogo afirma Fraunces Light 300 para display/headings, Manrope para UI/corpo, Geist/Inter como default. `.font-fraunces` e `.font-manrope` têm `!important`; HTML de títulos contém `Source Serif 4` inline, então as classes prevalecem. A divergência deve ser resolvida antes de implementar.

| Papel | Valor |
|---|---|
| Hero h1 | `clamp(3rem,8vw,6.75rem)`, line-height `.98`, tracking zero |
| Statement | Fraunces 300; line-height 1.1; ênfase green 400 |
| H2 | `clamp(2.25rem,5vw,4.25rem)`, line-height 1.1 |
| H2 menor | `clamp(2rem,4.5vw,3.5rem)`, line-height 1.05 |
| Lead | 16px, 18px a partir de `sm`, line-height 1.65 |
| Nav/CTA | Manrope médio, 12–14px |

## Aplicação futura

- Contrapor display expressivo e UI legível; controlar linha de parágrafo.
- Tracking negativo só nos títulos grandes, tracking positivo em labels concisos.
- Usar `clamp()` e limite de largura, validar em português e em viewport estreita.
- Quebra manual só quando fizer parte da identidade; fontes locais precisam estar carregadas antes de julgar métrica.

## Escala fluida sugerida (nova proposta, não token das referências)

Uma rampa prática pode interpolar limites min/max de viewport com `clamp()`. Não tratar valores abaixo como escala extraída; são um starter conservador a validar com conteúdo em português:

```css
:root {
  --type-caption: clamp(.75rem, .72rem + .12vw, .8125rem);
  --type-body: clamp(1rem, .96rem + .2vw, 1.125rem);
  --type-h3: clamp(1.5rem, 1.2rem + 1.2vw, 2rem);
  --type-h2: clamp(2rem, 1.45rem + 2.2vw, 3.5rem);
  --type-display: clamp(3rem, 1.8rem + 5vw, 6.75rem);
}
body { font-size: var(--type-body); line-height: 1.55; }
h1 { font-size: var(--type-display); line-height: 1; }
small, .caption { font-size: var(--type-caption); line-height: 1.4; }
```

Controle adicional: corpo normalmente precisa de line-height mais folgado que display; largura confortável começa em torno de 60–70 caracteres, mas depende da família, idioma e tarefa. Evitar tracking negativo em texto de parágrafo e uppercase para frases longas. Testar zoom/reflow, fontes de fallback e texto com comprimento variável.
