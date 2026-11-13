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
| Endereço, telefone, horários, comodidades, distâncias, avaliação, pendências | `src/data/hotel.ts` |
| Cores, tipografia, espaçamentos | `src/styles/global.css` (variáveis em `:root`) |
| Página inicial / Acomodações / Contato | `src/pages/` |
| Formulário de reserva (validação, ligar, copiar, WhatsApp) | `src/components/ReservaForm.astro` |

## Trocar as ilustrações por fotos reais

Todas as imagens passam pelo componente `src/components/Imagem.astro`: sem foto, ele desenha a
ilustração; com foto, usa a foto. Para trocar:

1. Coloque o arquivo em `public/fotos/` (ex.: `public/fotos/fachada.jpg`).
2. Passe o caminho no `<Imagem>` que você quer trocar, por exemplo `foto="/fotos/fachada.jpg"` em `src/pages/index.astro`.

Escreva sempre um `alt` descritivo. Depois de trocar, revise o contraste do texto sobre a foto do topo
(o texto é escuro; fotos escuras exigem trocá-lo para branco).

## Vídeo no topo da home

O topo da home usa a ilustração. Para usar um vídeo:

1. Guarde o original em `videos-originais/` (essa pasta não vai para o GitHub).
2. Rode `scripts/preparar-video.sh videos-originais/seu-video.mp4 3 10` (começa no segundo 3 e usa 10 segundos).
   O script gera `public/videos/hero.mp4`, `hero.webm` e `hero-poster.jpg`, sem áudio e com até 4 MB.
3. Rode o build. O site detecta os arquivos sozinho e passa a mostrar o vídeo, com botão de pausa.
4. Preencha `CREDITOS.md` com a origem e a licença.

Para voltar à ilustração, apague os três arquivos de `public/videos/`.
O vídeo não toca sozinho para quem pede "reduzir movimento" no sistema nem com economia de dados.

## WhatsApp

O WhatsApp do hotel **não foi informado**. Sem ele, o formulário prepara o pedido e oferece "Ligar para o hotel" e "Copiar mensagem".
Se o hotel tiver WhatsApp, preencha `whatsapp` em `src/data/hotel.ts` (formato internacional, só dígitos, ex.: `5517999999999`).

## Dados

Tudo o que aparece no site vem do documento de conteúdo enviado para o projeto (endereço, telefone, check-in e check-out,
comodidades, distâncias e a nota do Google). **O site não afirma nada além disso.**

O que ainda falta confirmar está na lista `pendencias` de `src/data/hotel.ts`: categorias e quantidade de quartos, fotos oficiais,
valores, formas de pagamento, cancelamento, horário do café, regras para crianças e animais, link de reservas, redes sociais,
o que "Acessibilidade" inclui e o bairro (o documento cita "Dr. Paulo Prata" e "Jardim Campo Redondo").

Os preços de referência (R$ 260 no Booking/Agoda) **não** são exibidos, como o documento orienta.

## Outras versões

- `/prototipos/` tem as três direções do topo que foram comparadas (claro, paisagem, escuro).
- A primeira versão do site (identidade de placa de rodovia) está no histórico do git: commit `592d929`.

## Verificações feitas

Revisão com o plugin UI/UX Behaves aplicada: resumo de erros com foco, aviso imediato de quarto x hóspedes,
saída para pop-up bloqueado (link e copiar mensagem), menu com foco preso no painel, sem deslocamento
do título quando aparecem erros e página 404.


axe-core sem violações (home, acomodações, contato e 404, desktop e celular, incluindo erros do formulário);
varredura de todas as páginas publicadas contra afirmações não confirmadas; sem rolagem horizontal.
Não testado com leitor de tela real.
