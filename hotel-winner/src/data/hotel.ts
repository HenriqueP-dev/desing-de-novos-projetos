/**
 * Dados do hotel num único lugar.
 *
 * PROJETO CONCEITUAL: tudo marcado como `placeholder` é fictício e deve ser
 * substituído por dados reais, confirmados com o hotel, antes de qualquer uso.
 * Os campos `verificado` vieram de listagens de terceiros (Expedia/Trip.com)
 * e também precisam de confirmação com o hotel.
 */
export const hotel = {
  nome: 'Hotel Winner',
  cidade: 'Barretos',
  uf: 'SP',
  // placeholder: vazio = modo conceitual (mostra prévia da mensagem).
  // Para ativar, use o WhatsApp real em formato internacional, só dígitos (ex.: '5517999999999').
  whatsapp: '',
  // placeholder
  telefone: '(00) 0000-0000',
  email: 'reservas@exemplo.com.br',
  endereco: 'Endereço a confirmar · Barretos, SP',
  // verificado em listagens de terceiros
  checkIn: '13h às 24h',
  checkOut: 'até 12h',
  cafe: 'Café da manhã continental',
} as const;

export const quartos = [
  {
    id: 'standard',
    nome: 'Standard',
    resumo: 'O essencial bem feito para quem vem a trabalho ou só precisa descansar.',
    capacidade: 'Até 2 hóspedes',
    itens: ['Cama casal ou duas de solteiro', 'Mesa de trabalho', 'Banheiro privativo'],
    tom: 'areia',
  },
  {
    id: 'superior',
    nome: 'Superior',
    resumo: 'Mais espaço e silêncio para estadias longas ou para comemorar.',
    capacidade: 'Até 3 hóspedes',
    itens: ['Cama king ou queen', 'Área de estar', 'Vista privilegiada'],
    tom: 'brasa',
  },
  {
    id: 'familia',
    nome: 'Família',
    resumo: 'Todo mundo no mesmo quarto, sem apertar ninguém.',
    capacidade: 'Até 4 hóspedes',
    itens: ['Cama casal + solteiros', 'Espaço para bagagem', 'Perto do café da manhã'],
    tom: 'mata',
  },
] as const;
