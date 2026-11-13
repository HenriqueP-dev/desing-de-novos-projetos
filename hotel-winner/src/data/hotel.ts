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
  elogios: [
    'Quartos limpos e bem cuidados',
    'Camas confortáveis',
    'Bons chuveiros',
    'Estacionamento conveniente',
    'Bom custo-benefício',
    'Café da manhã saboroso',
    'Equipe educada e atenciosa',
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
  'Quantidade e categorias de quartos',
  'Fotos oficiais dos quartos e das instalações',
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
