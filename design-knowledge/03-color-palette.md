# 03 — Paletas e combinação cromática

HEX são declarados nas referências; RGB é a conversão matemática quando o CSS não fornece RGB. Valores de imagem não são tratados como tokens.

## Elicyon

| Papel | HEX / RGB | Uso |
|---|---|---|
| Ground/type light | `#F4F2EE` / `244,242,238` | Fundo principal, texto claro e moldura |
| Texto | `#000000` / `0,0,0` | Texto em ground cream/azul |
| Azul | `#6E89C8` / `110,137,200` | Footer, consent, hero reveal |
| Ouro | `#907533` / `144,117,51` | Cursor e label |
| Terracota | `#8D5D52` / `141,93,82` | Frame do slider de objetos |
| Secondary catalog | `#3A3631` / `58,54,49` | Metadados/notas |
| Muted catalog | `#3F3B35` / `63,59,53` | Labels |
| Disabled | `#727272` / `114,114,114` | Checkbox necessário |

Overlays: hero preto `.10`, tile `.20`, team `.20` abaixo de lg e `.30` a partir de lg; gradiente do slide `rgba(0,0,0,.2)`→transparent. Placeholder preto `.70`; legal preto `.50`; pager cream `.35`→1. Campo/underline 1px preto/currentColor.

## Hanzo

Neutros: `#D9D9D9` (217,217,217), `#E3E3E3` (227,227,227), `#E2E2E2` (226,226,226), `#EAEAEA` (234,234,234), `#BDBDBD` (189,189,189), `#D0D0D0` (208,208,208), `#A3A3A3` (163,163,163), `#9C9C9C` (156,156,156), `#2B2B2B` (43,43,43), `#2E2E2E` (46,46,46), `#262626` (38,38,38), branco e preto. Acentos: orange `#FF3700` (255,55,0), green `#0CB300` (12,179,0). O texto do catálogo define “grey, white and ink, with one hot orange accent”; green aparece em amostra de status. Aplicação exata por token varia nos exemplos exportados.

Superfícies usam chip escuro `rgba(0,0,0,.82)`, menus/cards brancos, frost e frame preto. Ring branco `.25`, sombra e contraste fazem profundidade.

## NØEMA

| Papel | HEX | RGB | Uso declarado |
|---|---|---|---|
| Void | `#050506` | `5,5,6` | Fundo escuro |
| Void alt | `#0B0B0D` | `11,11,13` | Preto secundário |
| Paper | `#F1F0EA` | `241,240,234` | Texto/papel claro |
| Gray paper | `#CFCEC8` | `207,206,200` | Superfície papel |
| Pale paper | `#E7E5DE` | `231,229,222` | Cards/notes |
| Electric | `#6C63FF` | `108,99,255` | CTA, orb, ticker, rail, seleção |
| Signal | `#A9A5FF` | `169,165,255` | Progress, índice, HUD, highlights |
| Status | `#7BFF82` | `123,255,130` | Dot online, glow `.7` |

Nav/sidebar `rgba(5,5,6,.86–.88)`; catalog scrim .90→.68; violet border `.68`; signal glow `.7`. Há uso explícito de alto contraste entre paper e void.

## TerraSprint

| Papel | Valor | Uso |
|---|---|---|
| Ground | `#EAE7DD` / rgb(234,231,221) | Fundo exterior |
| Ink | `#232427` / rgb(35,36,39) | Título/nav |
| Graphite | `#2E3034` / rgb(46,48,52) | Texto |
| Green | `#3F7D53` / rgb(63,125,83) | Accent/eyebrow |
| Deep green | `#2F6844` / rgb(47,104,68) | CTA emphasis |
| Pine gradient | `rgb(47,74,58)→rgb(22,37,28)` (`#2F4A3A→#16251C`) | CTA |
| Pine panel | `#1F3326` | Plano destacado |
| Muted well | `#F4F5F5` | Icon well/meta/cards |
| Signal red | `#E34A32` | Barra do gráfico de case |
| Rose | `#F7EEEA→#F1DED6` | Painel de case |
| Blue | `#EAF0F7→#DCE6F2` | Painel de case |
| Light green | `#EAF6EC→#DDEFE1` | Floating chip |

Green tint `rgba(63,125,83,.08)` com border `.18`; texto muted graphite `.55–.62`; superfícies brancas `.78–.94`; nav `.78`. Hero usa radial bloom verde `.42`→transparente. Card borders graphite `.06–.10`, inset white highlight variável.

## Síntese

Manter cada paleta como conjunto fechado. Eleger uma cor semântica de ação; assegurar contraste de texto e focus. Transparências em cima de foto dependem do crop e não garantem contraste constante. Cores de apresentação de case não viram tokens globais sem justificativa.
