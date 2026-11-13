# Como criar o site de outro cliente (hotel ou pousada)

Este projeto é um **modelo**: o código (layout, animações, formulário, acessibilidade, testes) é o mesmo para todo cliente.
O que muda de cliente para cliente fica em poucos lugares:

| O que muda | Onde |
|---|---|
| Nome, telefone, endereço, quartos, textos, seções | `src/conteudo/<cliente>.ts` |
| Cores e fontes | `src/styles/tema.css` |
| Logo, fotos, vídeo | `public/` |

O Hotel Winner é o **exemplo preenchido** (`src/conteudo/winner.ts`). Para ver como cada campo é usado, abra o Winner e o site lado a lado.

## 1. Criar o projeto do novo cliente

Na pasta `hotel-winner/`:

```bash
scripts/novo-cliente.sh ../pousada-sol
cd ../pousada-sol
npm install
```

O script **não altera** este projeto. Ele copia o código e deixa de fora tudo que é do Winner (fotos, logo, vídeo, apresentação, protótipos, `PENDENCIAS.md`, `CREDITOS.md`). O conteúdo novo começa em branco, em `src/conteudo/novo.ts`.
Se a pasta já existir, o script recusa e não escreve nada.

Depois, crie um repositório no GitHub para o cliente e envie o projeto (`git init`, `git add .`, `git commit`, `git push`).

## 2. Preencher o conteúdo (`src/conteudo/novo.ts`)

Tudo que está entre `[colchetes]` precisa ser trocado. O editor avisa se faltar algum campo (os tipos estão em `tipos.ts`).

**Regra de ouro: só escreva o que o cliente confirmou.** O que faltar vai em `pendencias` e em `textos.acomodacoes.emDefinicao` (a página mostra "Em definição com o hotel").

- `hotel`: nome, cidade, endereço, telefone, check-in/out, caminho da logo. `whatsapp` fica vazio até o cliente informar (o formulário então oferece ligar ou copiar a mensagem).
- `apartamentos`: um item por tipo de quarto. A capacidade só entra se confirmada. Sem foto real, deixe `fotos: []`: a página mostra "Foto a ser fornecida pelo hotel".
- `comodidades`: lista curta. Já existem ícones para: Wi-Fi gratuito, Café da manhã incluído, Estacionamento, Acessibilidade, Piscina, Ar-condicionado. Os demais usam um ícone discreto padrão; para um ícone próprio, acrescente uma linha em `src/components/Icone.astro`.
- `distancias`, `pontosTuristicos`, `avaliacao`, `cartoes`: preencha só se houver dado confirmado.
- `textos`: **todo o texto das páginas**: título do topo, frases, botões, notas. Nada de texto fica dentro das páginas.
- `secoes`: liga ou desliga blocos da home (`roteiro`, `pontosTuristicos`, `avaliacoes`). Se desligar `pontosTuristicos`, apague a pasta `src/pages/pontos-turisticos/`.
- `seo.indexar`: `false` em demonstração (o site pede para o Google não indexar). Em site de verdade, `true`, e apague a faixa de aviso (`textos.aviso: ''`).

Para trocar o cliente ativo em um mesmo projeto, troque a linha de `src/conteudo/ativo.ts`.

## 3. Cores e fontes (`src/styles/tema.css`)

É o único arquivo de estilo que muda. As cores têm nomes fixos (`--ouro` é a cor de destaque, `--ouro-texto` é a versão escura dela para texto, `--grafite` é o título, `--marrom` o texto secundário, `--champ` o fundo das faixas).

Cuidados que o modelo já respeita e que a nova paleta também precisa respeitar:
- texto comum precisa de **4,5:1** de contraste com o fundo (use um verificador de contraste);
- a cor de destaque, se for clara (como o amarelo do Winner), **só serve de fundo de botão ou marcador**, nunca de texto sobre branco;
- por isso `--ouro-texto` existe: uma versão escura do destaque para texto pequeno.

Os testes de acessibilidade (axe) acusam contraste ruim. Depois de trocar as cores, rode os testes.
Fontes: troque os `@import` no topo do `tema.css` e as duas linhas `--f-titulo` e `--f-texto`. Em `global.css`, as linhas `font-variation-settings: 'opsz' 28` valem para a fonte Bodoni Moda; apague-as se a nova fonte não tiver esse eixo.

## 4. Logo, fotos e vídeo

- **Logo:** coloque em `public/` (PNG com fundo transparente ou SVG) e ajuste `hotel.logo`. Sem arquivo, o site mostra o nome em texto. Peça sempre o vetor (SVG): PNG pequeno fica borrado.
- **Fotos:** em `public/fotos/`, preferencialmente `.webp`, com 1200 px de largura ou mais. Cada foto tem `alt` (o que aparece nela) e `legenda`, em `apartamentos`.
- **Vídeo do topo:** `scripts/preparar-video.sh arquivo.mp4 inicio duracao` gera `public/videos/hero.mp4`, `hero.webm` e `hero-poster.jpg`. Sem esses arquivos o site mostra um espaço reservado.
- **`CREDITOS.md`:** uma linha para cada foto e vídeo, com origem, autor e licença. Sem isso, o arquivo não vai para o site público.
- Material de banco (Mixkit etc.): confira a licença de cada arquivo. Marque como "ilustrativo" no site.

## 5. Testar e publicar

```bash
npm run build         # gera o site
npm run test:e2e      # testes de responsividade, acessibilidade, formulário, conteúdo
```

Os testes leem o conteúdo do cliente ativo, então servem para qualquer cliente. Vídeo e pontos turísticos só são testados se o cliente tiver.
Publicação: Vercel, ligada ao repositório do cliente. Para demonstração, a proteção de login da Vercel pode ser desligada (assim o dono abre o link sem conta); para voltar a proteger, religue no painel.

## 6. Limites do modelo

- É um modelo para **hospedagem** (hotéis e pousadas): quartos, comodidades, check-in/out, localização. Outro ramo (restaurante, clínica, loja) aproveita o cabeçalho, o rodapé, o formulário, as animações e os testes, mas precisa de **seções novas** no lugar de quartos e comodidades.
- A página de apresentação (`/apresentacao/`) e os protótipos (`/prototipos/`) são do Winner e não vão para o projeto novo. Para fazer uma apresentação de uma página para outro cliente, use `src/pages/apresentacao.astro` do Winner como base.

## Checklist antes de mostrar ao cliente

- [ ] Nenhum `[colchete]` sobrando no site (procure por `[` no `novo.ts`).
- [ ] Telefone, endereço e horários conferidos com o cliente.
- [ ] Fotos com autorização de uso (ou marcadas como provisórias).
- [ ] Vídeo ilustrativo identificado como tal.
- [ ] `npm run test:e2e` passando.
- [ ] Link aberto numa janela anônima (sem login).
