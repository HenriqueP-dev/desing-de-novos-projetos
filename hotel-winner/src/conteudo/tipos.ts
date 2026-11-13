/**
 * Formato do conteúdo de um cliente. Todo arquivo de cliente (winner.ts, em-branco.ts...) segue estes tipos,
 * então o editor avisa quando falta ou sobra algum campo.
 */
export interface Hotel {
  nome: string;
  categoria: string;          // ex.: 'Hotel 2 estrelas', 'Pousada'
  estrelas: number | null;    // usado nos dados estruturados; null se não houver
  cidade: string;
  uf: string;
  endereco: string;           // rua e número
  cep: string;
  enderecoCompleto: string;
  telefone: string;           // como aparece na tela
  telefoneLink: string;       // 'tel:+55...'
  telefoneIntl: string;       // '+55 17 3325-7186'
  siteAtual: string;          // site atual do cliente ('' se não houver)
  siteAtualRotulo: string;
  logo: string;               // arquivo em /public, ex.: '/logo.png'
  mapaLink: string;
  whatsapp: string;           // só dígitos com DDI; '' = o formulário oferece ligar ou copiar a mensagem
  checkIn: string;            // texto: 'a partir das 13h'
  checkOut: string;
  checkInHora: string;        // '13:00'
  checkOutHora: string;
  cafe: string;
}

export interface Avaliacao {
  nota: string;               // '4,3'
  total: number;
  fonte: string;              // 'Google'
  temas: { titulo: string; itens: string[] }[];
}

export interface FotoApto { src: string; alt: string; legenda: string }
export interface Apartamento { id: string; nome: string; pessoas: number; fotos: FotoApto[] }
export interface PontoTuristico { nome: string; distancia: string }
export interface Distancia { lugar: string; km: string }

export interface Secoes { roteiro: boolean; pontosTuristicos: boolean; avaliacoes: boolean }
export interface Seo { indexar: boolean; descricao: string }

export interface Textos {
  aviso: string;              // faixa do topo; '' = sem faixa
  rodapeNota: string;         // '' = sem nota
  rodapeSite: string;
  hero: { linha1: string; linha2: string; lead: string; ligar: string; reservaLink: string; legendaVideo: string; legendaSemVideo: string };
  roteiro: { titulo: string; passos: { t: string; d: string }[] };
  acomodacoes: {
    titulo: string; categoriaRotulo: string; lead: string; nota: string; botao: string; semFoto: string;
    paginaDescricao: string; equipTitulo: string; equipFonte: string; notaPagina: string; equipCat: string;
    noHotel: string; emDefinicaoTitulo: string; emDefinicaoNota: string; emDefinicao: string[];
  };
  localizacao: { titulo: string; botaoMapa: string; notaDistancias: string };
  pontos: { tituloHome: string; botaoHome: string; titulo: string; descricao: string; lead: string; nota: string; semDistancia: string; chamada: string };
  avaliacoes: { tituloLeitor: string; nota: string };
  contato: { titulo: string; lead: string; descricao: string; reserva: string };
}
