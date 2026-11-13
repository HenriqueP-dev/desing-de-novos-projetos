/**
 * Dados do hotel num único lugar.
 *
 * PROJETO CONCEITUAL. Tudo aqui vem do documento de conteúdo enviado para o projeto.
 * Não invente nada que não esteja nele: o que ainda falta está em `pendencias`.
 */
export const hotel = {
  nome: 'Hotel Winner',
  categoria: 'Hotel 2 estrelas',
  cidade: 'Barretos',
  uf: 'SP',
  endereco: 'Av. do Ébano, 1415',
  enderecoCompleto: 'Av. do Ébano, 1415, Barretos, SP, CEP 14784-383',
  telefone: '(17) 3325-7186',
  telefoneLink: 'tel:+551733257186',
  siteAtual: 'https://hotelwinner.com.br',
  mapaLink: 'https://www.google.com/maps/search/?api=1&query=Av.+do+%C3%89bano+1415+Barretos+SP',
  // WhatsApp NÃO foi informado. Vazio = o formulário prepara a mensagem e oferece ligar ou copiar.
  // Se o hotel tiver WhatsApp, preencha com o número internacional, só dígitos (ex.: '5517999999999').
  whatsapp: '',
  checkIn: 'a partir das 13h',
  checkOut: 'até as 12h',
  cafe: 'Incluído',
} as const;

export const avaliacao = {
  nota: '4,3',
  total: 353,
  fonte: 'Google',
  // Os mesmos 7 elogios do documento, apenas agrupados por assunto.
  temas: [
    { titulo: 'No quarto', itens: ['Quartos limpos e bem cuidados', 'Camas confortáveis', 'Bons chuveiros'] },
    { titulo: 'Na chegada', itens: ['Estacionamento conveniente', 'Equipe educada e atenciosa'] },
    { titulo: 'Na conta e no café', itens: ['Bom custo-benefício', 'Café da manhã saboroso'] },
  ],
} as const;

export const comodidades = [
  'Wi-Fi gratuito',
  'Café da manhã incluído',
  'Estacionamento',
  'Acessibilidade',
  'Piscina',
  'Ar-condicionado',
] as const;

export const distancias = [
  { lugar: 'Catedral do Divino Espírito Santo', km: '3,7 km' },
  { lugar: 'Centro de Barretos', km: '5 km' },
  { lugar: 'Parque do Peão, arena de shows e rodeios', km: '11 km' },
] as const;

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

type FotoApto = { src: string; alt: string; legenda: string };

/**
 * Categorias de apartamento citadas no texto da página de apartamentos do hotel: Duplos, Triplos, Quádruplos e Quíntuplos.
 * "Individual" foi citado pelo cliente, mas a página não o cita: fica em PENDENCIAS.md.
 * A capacidade vem do NOME da categoria (duplo = 2 pessoas etc.) e ainda precisa ser confirmada.
 * As legendas descrevem só o que aparece em cada foto. A foto de cada categoria foi escolhida pelo número de camas
 * visíveis, e o hotel precisa confirmar a correspondência.
 */
export const apartamentos: readonly { id: string; nome: string; pessoas: number; fotos: readonly FotoApto[] }[] = [
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
