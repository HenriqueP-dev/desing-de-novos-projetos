/**
 * CONTEÚDO DO CLIENTE: Hotel Winner (Barretos/SP). É o exemplo preenchido do modelo.
 *
 * PROJETO CONCEITUAL. Tudo aqui vem do documento de conteúdo enviado para o projeto e das páginas do site do hotel.
 * Não invente nada que não esteja nisso: o que ainda falta está em `pendencias`.
 * Para um cliente novo, copie `em-branco.ts`, preencha e aponte `ativo.ts` para o novo arquivo.
 */
import type { Hotel, Textos, Secoes, Seo, Apartamento, PontoTuristico, Avaliacao, Distancia } from './tipos';

export const hotel: Hotel = {
  nome: 'Hotel Winner',
  categoria: 'Hotel 2 estrelas',
  estrelas: 2,
  cidade: 'Barretos',
  uf: 'SP',
  endereco: 'Av. do Ébano, 1415',
  cep: '14784-383',
  enderecoCompleto: 'Av. do Ébano, 1415, Barretos, SP, CEP 14784-383',
  telefone: '(17) 3325-7186',
  telefoneLink: 'tel:+551733257186',
  telefoneIntl: '+55 17 3325-7186',
  siteAtual: 'https://hotelwinner.com.br',
  siteAtualRotulo: 'hotelwinner.com.br',
  logo: '/logo-winner.png',
  mapaLink: 'https://www.google.com/maps/search/?api=1&query=Av.+do+%C3%89bano+1415+Barretos+SP',
  // WhatsApp NÃO foi informado. Vazio = o formulário prepara a mensagem e oferece ligar ou copiar.
  // Se o hotel tiver WhatsApp, preencha com o número internacional, só dígitos (ex.: '5517999999999').
  whatsapp: '',
  checkIn: 'a partir das 13h',
  checkOut: 'até as 12h',
  checkInHora: '13:00',
  checkOutHora: '12:00',
  cafe: 'Incluído',
};

/** Bandeiras mostradas na página de apartamentos do site do hotel (conferido numa captura de tela enviada pelo cliente). */
export const cartoes = ['Mastercard', 'Visa', 'American Express', 'Diners Club', 'Visa Electron'] as const;
/** Lema que aparece no topo do site do hotel. */
export const lema = 'Excelência em servi-lo!';

/**
 * Pontos turísticos. A página "Pontos Turísticos" do site do hotel diz: "Região dos Lagos, Parque do Peão,
 * Estação Cultura, Museu Histórico, Artístico e Folclórico "Rui Menezes", são alguns dos pontos turísticos de Barretos."
 * A Catedral e as distâncias (3,7 km e 11 km) vêm do documento de conteúdo. As demais distâncias não foram informadas.
 * A página oficial tem 12 fotos sem legenda; não foram usadas (resolução baixa, sem identificação, sem autorização).
 */
export const pontosTuristicos: PontoTuristico[] = [
  { nome: 'Região dos Lagos', distancia: '' },
  { nome: 'Parque do Peão', distancia: '11 km do hotel' },
  { nome: 'Estação Cultura', distancia: '' },
  { nome: 'Museu Histórico, Artístico e Folclórico “Rui Menezes”', distancia: '' },
  { nome: 'Catedral do Divino Espírito Santo', distancia: '3,7 km do hotel' },
];

export const avaliacao: Avaliacao = {
  nota: '4,3',
  total: 353,
  fonte: 'Google',
  // Os mesmos 7 elogios do documento, apenas agrupados por assunto.
  temas: [
    { titulo: 'No quarto', itens: ['Quartos limpos e bem cuidados', 'Camas confortáveis', 'Bons chuveiros'] },
    { titulo: 'Na chegada', itens: ['Estacionamento conveniente', 'Equipe educada e atenciosa'] },
    { titulo: 'Na conta e no café', itens: ['Bom custo-benefício', 'Café da manhã saboroso'] },
  ],
};

export const comodidades = [
  'Wi-Fi gratuito',
  'Café da manhã incluído',
  'Estacionamento',
  'Acessibilidade',
  'Piscina',
  'Ar-condicionado',
] as const;

export const distancias: Distancia[] = [
  { lugar: 'Catedral do Divino Espírito Santo', km: '3,7 km' },
  { lugar: 'Centro de Barretos', km: '5 km' },
  { lugar: 'Parque do Peão, arena de shows e rodeios', km: '11 km' },
];

/** Ainda precisa ser confirmado com o hotel. O site não afirma nenhum destes itens. */
export const pendencias = [
  'Categorias de apartamento: o texto do site antigo cita duplo, triplo, quádruplo e quíntuplo; "individual" não apareceu',
  'Capacidade e camas de cada categoria, e quantos apartamentos há de cada tipo',
  'Origem e direitos das fotos dos apartamentos, e a que categoria cada uma corresponde',
  'Fotos da fachada, recepção, banheiros, café da manhã, estacionamento e áreas internas',
  'Descrição dos tipos de acomodação',
  'Valores atualizados das diárias',
  'Formas de pagamento',
  'Política de cancelamento',
  'Horário do café da manhã',
  'Regras para crianças e animais de estimação',
  'Link direto para reservas (e WhatsApp, se houver)',
  'Redes sociais oficiais',
  'O que "Acessibilidade" inclui',
  'Bairro: o documento cita "Dr. Paulo Prata" e "Jardim Campo Redondo"',
] as const;

/**
 * Equipamentos dos apartamentos.
 * Origem: texto da página "Apartamentos" do site do hotel, colado pelo cliente (e igual ao resumo de busca).
 * O site em si não pôde ser aberto direto nesta sessão (ver PENDENCIAS.md).
 */
export const equipamentosApto = [
  'Cama box',
  'Ar-condicionado',
  'TV de LED com parabólica',
  'Frigobar',
  'Banheiro amplo com box blindex',
  'Ducha higiênica',
  'Secador de cabelo',
] as const;

/**
 * Categorias de apartamento citadas no texto da página de apartamentos do hotel: Duplos, Triplos, Quádruplos e Quíntuplos.
 * "Individual" foi citado pelo cliente, mas a página não o cita: fica em PENDENCIAS.md.
 * A capacidade vem do NOME da categoria (duplo = 2 pessoas etc.) e ainda precisa ser confirmada.
 * As legendas descrevem só o que aparece em cada foto. A foto de cada categoria foi escolhida pelo número de camas
 * visíveis, e o hotel precisa confirmar a correspondência.
 */
export const apartamentos: Apartamento[] = [
  {
    id: 'duplo', nome: 'Duplo', pessoas: 2,
    fotos: [{ src: '/fotos/apto-duplo-cama-casal.webp', alt: 'Apartamento com cama de casal, mesa redonda com duas cadeiras, TV na parede, ar-condicionado e armário de madeira.', legenda: 'Na foto: cama de casal, mesa com duas cadeiras, TV na parede e ar-condicionado.' }],
  },
  {
    id: 'triplo', nome: 'Triplo', pessoas: 3,
    fotos: [
      { src: '/fotos/apto-triplo-casal-e-solteiro.webp', alt: 'Apartamento com uma cama de casal e uma de solteiro, criados-mudos de madeira e um quadro na parede.', legenda: 'Na foto: uma cama de casal e uma de solteiro.' },
      { src: '/fotos/apto-triplo-tres-solteiros.webp', alt: 'Apartamento com três camas de solteiro, ar-condicionado, TV na parede, armário de madeira e frigobar.', legenda: 'Na foto: três camas de solteiro, ar-condicionado, TV, armário e frigobar.' },
      { src: '/fotos/apto-triplo-tres-solteiros-frigobar.webp', alt: 'Três camas de solteiro lado a lado, com criados-mudos e um frigobar no canto.', legenda: 'Na foto: três camas de solteiro e frigobar.' },
    ],
  },
  {
    id: 'quadruplo', nome: 'Quádruplo', pessoas: 4,
    fotos: [{ src: '/fotos/apto-quadruplo-tres-camas.webp', alt: 'Apartamento com três camas lado a lado, uma delas mais larga, criados-mudos de madeira e quadro na parede.', legenda: 'Na foto: três camas lado a lado, uma delas mais larga.' }],
  },
  { id: 'quintuplo', nome: 'Quíntuplo', pessoas: 5, fotos: [] },
];

/** Quais blocos aparecem. Desligue o que o cliente não tem (a página /pontos-turisticos/ deve então ser apagada). */
export const secoes: Secoes = { roteiro: true, pontosTuristicos: true, avaliacoes: true };

export const seo: Seo = {
  indexar: false, // protótipo conceitual: não indexar. Em site de verdade, true.
  descricao: 'Hotel Winner, hotel 2 estrelas em Barretos, SP. Café da manhã incluído, Wi-Fi gratuito, estacionamento e piscina. Projeto conceitual.',
};

/** Todo o texto das páginas. Mantenha só fatos confirmados pelo cliente. */
export const textos: Textos = {
  aviso: 'Projeto conceitual de design. Este não é o site oficial do Hotel Winner.',
  rodapeNota: 'Projeto conceitual de design e desenvolvimento, sem vínculo oficial com o Hotel Winner. As informações vêm do conteúdo enviado para o projeto. Valores, fotos, categorias de quarto e políticas ainda dependem de confirmação com o hotel. O vídeo do topo é ilustrativo.',
  rodapeSite: 'Site atual do hotel:',
  hero: {
    linha1: 'Chegue, estacione,',
    linha2: 'descanse.',
    lead: 'A 5 km do centro de Barretos, com estacionamento e café da manhã incluído.',
    ligar: 'Ligar para o hotel',
    reservaLink: 'ou peça uma reserva abaixo',
    legendaVideo: 'Vídeo ilustrativo, não mostra o hotel',
    legendaSemVideo: 'Espaço reservado para o vídeo do hotel',
  },
  roteiro: {
    titulo: 'Do check-in ao check-out',
    passos: [
      { t: 'Chegar', d: 'Check-in a partir das 13h, com estacionamento para os hóspedes.' },
      { t: 'Descansar', d: 'Camas confortáveis e bons chuveiros, segundo os hóspedes.' },
      { t: 'Tomar café e seguir', d: 'Café da manhã incluído. Check-out até as 12h.' },
    ],
  },
  acomodacoes: {
    titulo: 'Acomodações',
    categoriaRotulo: 'Apartamento',
    lead: 'Apartamentos duplos, triplos, quádruplos e quíntuplos, com cama box, ar-condicionado, TV de LED com parabólica e frigobar.',
    nota: 'Capacidade pelo nome da categoria e fotos enviadas para o projeto; o hotel ainda vai confirmar capacidade, camas e a categoria de cada foto.',
    botao: 'Ver os apartamentos',
    semFoto: 'Foto a ser fornecida pelo hotel',
    // página /acomodacoes/
    paginaDescricao: 'Apartamentos duplos, triplos, quádruplos e quíntuplos do Hotel Winner, em Barretos, com cama box, ar-condicionado, TV de LED com parabólica e frigobar. Projeto conceitual.',
    equipTitulo: 'Em todos os apartamentos',
    equipFonte: 'Conforme a página de apartamentos do site do hotel.',
    notaPagina: 'A página do hotel reúne todas as fotos num só carrossel, sem dizer a que categoria cada uma pertence. Aqui, a capacidade segue o nome da categoria e cada foto foi posta junto da categoria pelo número de camas que aparece nela; o hotel ainda vai confirmar essa associação. As legendas descrevem só o que se vê.',
    equipCat: 'Cama box, ar-condicionado, TV de LED com parabólica, frigobar e banheiro com box blindex, como nos demais apartamentos.',
    noHotel: 'No hotel',
    emDefinicaoTitulo: 'Em definição com o hotel',
    emDefinicaoNota: 'Estas informações ainda não foram confirmadas, por isso o site não as apresenta.',
    emDefinicao: [
      'Categoria "individual": a página de apartamentos do hotel não a cita',
      'Capacidade e camas de cada categoria, e quantos apartamentos há de cada tipo',
      'Fotos de todas as categorias e a que categoria cada foto corresponde',
      'Valores das diárias',
      'Política de cancelamento',
      'Regras para crianças e animais de estimação',
    ],
  },
  localizacao: { titulo: 'Localização', botaoMapa: 'Ver no Google Maps', notaDistancias: 'Distâncias aproximadas a partir do hotel.' },
  pontos: {
    tituloHome: 'Para conhecer em Barretos',
    botaoHome: 'Ver pontos turísticos',
    titulo: 'Pontos turísticos',
    descricao: 'Região dos Lagos, Parque do Peão, Estação Cultura e o Museu Histórico, Artístico e Folclórico Rui Menezes: pontos turísticos de Barretos perto do Hotel Winner. Projeto conceitual.',
    lead: 'Região dos Lagos, Parque do Peão, Estação Cultura e o Museu Histórico, Artístico e Folclórico “Rui Menezes” estão entre os pontos turísticos de Barretos.',
    nota: 'Os quatro primeiros nomes vêm da página de pontos turísticos do site do hotel; a Catedral e as distâncias vêm do documento de conteúdo do projeto. Fotos dos pontos turísticos serão incluídas quando houver imagens com autorização de uso.',
    semDistancia: 'Distância a confirmar com o hotel',
    chamada: 'Hospede-se perto de tudo isso.',
  },
  avaliacoes: {
    tituloLeitor: 'Experiência dos hóspedes',
    nota: 'Resumo das avaliações públicas do Google, não são citações literais. Notas e comentários mudam com o tempo.',
  },
  contato: {
    titulo: 'Fale com o hotel.',
    lead: 'Para reservas e informações, ligue para a recepção.',
    descricao: 'Telefone, endereço e horários do Hotel Winner, em Barretos. Projeto conceitual.',
    reserva: 'Peça a sua reserva',
  },
};
