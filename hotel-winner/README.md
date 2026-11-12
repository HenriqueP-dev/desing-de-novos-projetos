# Hotel Winner (projeto conceitual)

Site conceitual para o Hotel Winner, de Barretos (SP). **Não é o site oficial** e nada aqui foi
confirmado com o hotel. Identidade "Claro": branco, névoa azulada, tipografia fina (Jost), foto no comando.

## Rodar

```bash
npm install      # no Windows/PowerShell, se bloquear: npm.cmd install
npm run dev      # npm.cmd run dev  →  http://localhost:4321
npm run build    # gera o site estático em dist/
```

## Onde mexer

| O quê | Onde |
|---|---|
| Telefone, e-mail, endereço, WhatsApp, horários | `src/data/hotel.ts` |
| Quartos e experiências (textos, capacidades) | `src/data/hotel.ts` |
| Cores, tipografia, espaçamentos | `src/styles/global.css` (variáveis em `:root`) |
| Página inicial / Quartos / Contato | `src/pages/` |
| Formulário de reserva (validação, WhatsApp, relógio) | `src/components/ReservaForm.astro` |

## Trocar as ilustrações por fotos reais

Todas as imagens passam pelo componente `src/components/Imagem.astro`: sem foto, ele desenha a
ilustração; com foto, usa a foto. Para trocar:

1. Coloque o arquivo em `public/fotos/` (ex.: `public/fotos/quarto-standard.jpg`).
2. Em `src/data/hotel.ts`, preencha o campo `foto` do quarto ou da experiência: `foto: '/fotos/quarto-standard.jpg'`.
3. Para a foto do topo da home, passe `foto="/fotos/fachada.jpg"` no `<Imagem>` de `src/pages/index.astro`.

Escreva sempre um `alt` descritivo. Depois de trocar, revise o contraste do texto sobre a foto do topo
(o texto é escuro; fotos escuras exigem trocá-lo para branco).

## Ativar o WhatsApp

Em `src/data/hotel.ts`, preencha `whatsapp` com o número real (formato internacional, só dígitos, ex.: `5517999999999`).
Enquanto estiver vazio, o formulário mostra só a prévia da mensagem.

## Dados a confirmar com o hotel

Check-in 13h às 24h, check-out até 12h e café da manhã continental vieram de listagens de terceiros.
Todo o resto (preços, categorias, capacidades, contatos, "a confirmar") é fictício.

## Outras versões

- `/prototipos/` tem as três direções do topo que foram comparadas (claro, paisagem, escuro).
- A primeira versão do site (identidade de placa de rodovia) está no histórico do git: commit `592d929`.

## Verificações feitas

axe-core sem violações (home, quartos e contato, desktop e celular, incluindo erros do formulário);
contraste do texto sobre a imagem do topo medido no pior caso (mínimo 8,5:1); sem rolagem horizontal.
Não testado com leitor de tela real.
