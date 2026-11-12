# 07 — Efeitos visuais e técnicas

## Comprovado por código/catalogo

| Técnica | Origem | Evidência e uso |
|---|---|---|
| Glass/backdrop blur | TerraSprint, Hanzo, NØEMA | nav Terra white .78 + blur18px; sidebar Hanzo dark .86 + blur18/saturate1.1; nav/sidebar NØEMA .86–.88 + blur14–16px |
| Gradiente | TerraSprint, Elicyon | pine CTA, radial blooms, painéis de cases; scrim de slide Elicyon preto→transparent |
| Blend mode | Elicyon, NØEMA | cursor `difference`; nav NØEMA também mistura contra superfícies |
| `clip-path`/mask | NØEMA | reveal circular no hero, anatomy/field/collective, wipe do menu, linhas manifesto |
| Scroll pin/parallax | Elicyon, NØEMA | GSAP/ScrollTrigger, `data-parallax`; pin 210%/240% em legendas NØEMA |
| Canvas 2D | TerraSprint | `getContext('2d')`, chuva/umbrella no hero, pétalas no footer |
| Filtros | NØEMA | brightness/saturate e grayscale/contrast em cenas descritas |
| Ring/halo | NØEMA/TerraSprint | halos Collective e glow/bloom radial |
| Noise/grain | Hanzo/NØEMA | swatch de noise Hanzo; grain descrito em NØEMA. Origem pode ser imagem/CSS; shader não comprovado |
| SVG | Elicyon/Hanzo | cursor e logos Elicyon; ícones e símbolos inline do export Framer Hanzo |
| Rings/shadow elevation | Hanzo/TerraSprint | halo exterior, inset highlights, sombras macias de cards |

## Não inferir

Não foi encontrado Three.js, WebGL, shader próprio ou objeto 3D renderizado em tempo real. Figura futurista de NØEMA e mockups Hanzo são imagens. Canvas de TerraSprint é explicitamente 2D. Volume de sombra não é prova de neumorphism; nenhuma referência adota essa linguagem como sistema dominante.

## Cuidados de implementação

- `backdrop-filter` precisa de fallback sólido e teste em dispositivo modesto.
- Clip/filter em grande área pode custar GPU; evitar animar muitas propriedades de paint simultaneamente.
- `mix-blend-mode:difference` perde previsibilidade com fundos variáveis; nunca usar para texto informativo essencial.
- Grain/particles decorativos devem ser `aria-hidden`, econômicos e removíveis em reduced-motion.
- Sombras/rings são uma linguagem; aplicar somente nos componentes elevados dentro do mesmo sistema.
- Não incluir WebGL/Three.js sem conteúdo 3D real, orçamento e necessidade.
