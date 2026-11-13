/**
 * MODELO EM BRANCO DE CLIENTE. Copie este arquivo (ex.: `minha-pousada.ts`), preencha tudo que está entre [colchetes]
 * e aponte `ativo.ts` para ele. Regra de ouro: só escreva o que o cliente confirmou. O que faltar vai em `pendencias`.
 * O editor avisa (tipos de `tipos.ts`) se faltar algum campo.
 */
import type { Hotel, Textos, Secoes, Seo, Apartamento, PontoTuristico, Avaliacao, Distancia } from './tipos';

export const hotel: Hotel = {
  nome: '[Nome do hotel]',
  categoria: '[Hotel / Pousada / 3 estrelas...]',
  estrelas: null,                       // número (1 a 5) ou null
  cidade: '[Cidade]',
  uf: '[UF]',
  endereco: '[Rua e número]',
  cep: '[00000-000]',
  enderecoCompleto: '[Rua e número, Cidade, UF, CEP]',
  telefone: '[(00) 0000-0000]',
  telefoneLink: 'tel:+550000000000',    // só dígitos com +55 e DDD
  telefoneIntl: '+55 00 0000-0000',
  siteAtual: '',                        // site atual do cliente, ou '' se não houver
  siteAtualRotulo: '',
  logo: '/logo.png',                    // coloque o arquivo em public/
  mapaLink: 'https://www.google.com/maps/search/?api=1&query=[endereco+com+sinais+de+mais]',
  whatsapp: '',                         // só dígitos com DDI (ex.: '5511999999999'); vazio = formulário oferece ligar ou copiar
  checkIn: '[a partir das 14h]',
  checkOut: '[até as 12h]',
  checkInHora: '14:00',
  checkOutHora: '12:00',
  cafe: '[Incluído / Não incluído]',
};

export const lema = ''; // frase da marca, se existir

export const secoes: Secoes = { roteiro: false, pontosTuristicos: false, avaliacoes: false };
export const seo: Seo = { indexar: false, descricao: '[Uma frase sobre o hotel, com cidade e UF.]' };

export const avaliacao: Avaliacao = { nota: '', total: 0, fonte: '', temas: [] };
export const comodidades: string[] = [];   // ex.: 'Wi-Fi gratuito' (ícones prontos: Wi-Fi gratuito, Café da manhã incluído, Estacionamento, Acessibilidade, Piscina, Ar-condicionado)
export const distancias: Distancia[] = [];
export const cartoes: string[] = [];
export const pontosTuristicos: PontoTuristico[] = [];
export const equipamentosApto: string[] = [];
export const apartamentos: Apartamento[] = [
  { id: 'tipo-1', nome: '[Nome do tipo]', pessoas: 2, fotos: [] },
  // com foto: fotos: [{ src: '/fotos/arquivo.webp', alt: 'descrição da foto', legenda: 'Na foto: ...' }]
];
export const pendencias: string[] = ['[Tudo o que o cliente ainda precisa confirmar]'];

export const textos: Textos = {
  aviso: 'Projeto conceitual de design. Este não é o site oficial.', // '' = sem faixa (use em site de verdade)
  rodapeNota: '',
  rodapeSite: 'Site atual:',
  hero: { linha1: '[Primeira linha]', linha2: '[segunda linha.]', lead: '[Uma frase que explica o lugar.]', ligar: 'Ligar para o hotel', reservaLink: 'ou peça uma reserva abaixo', legendaVideo: 'Vídeo ilustrativo, não mostra o hotel', legendaSemVideo: 'Espaço reservado para o vídeo do hotel' },
  roteiro: { titulo: '[Título]', passos: [{ t: '[Passo 1]', d: '[Texto]' }] },
  acomodacoes: {
    titulo: 'Acomodações', categoriaRotulo: 'Apartamento', lead: '[Resumo dos quartos.]', nota: '', botao: 'Ver os apartamentos', semFoto: 'Foto a ser fornecida pelo hotel',
    paginaDescricao: '[Descrição para o Google.]', equipTitulo: 'Em todos os apartamentos', equipFonte: '', notaPagina: '', equipCat: '',
    noHotel: 'No hotel', emDefinicaoTitulo: 'Em definição com o hotel', emDefinicaoNota: 'Estas informações ainda não foram confirmadas, por isso o site não as apresenta.', emDefinicao: [],
  },
  localizacao: { titulo: 'Localização', botaoMapa: 'Ver no Google Maps', notaDistancias: 'Distâncias aproximadas a partir do hotel.' },
  pontos: { tituloHome: '[Para conhecer em Cidade]', botaoHome: 'Ver pontos turísticos', titulo: 'Pontos turísticos', descricao: '', lead: '', nota: '', semDistancia: 'Distância a confirmar com o hotel', chamada: 'Hospede-se perto de tudo isso.' },
  avaliacoes: { tituloLeitor: 'Experiência dos hóspedes', nota: '' },
  contato: { titulo: 'Fale com o hotel.', lead: 'Para reservas e informações, ligue para a recepção.', descricao: '[Telefone, endereço e horários.]', reserva: 'Peça a sua reserva' },
};
