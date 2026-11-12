/**
 * Dados do hotel num único lugar.
 *
 * PROJETO CONCEITUAL: o que está marcado como "placeholder" é fictício e deve
 * ser trocado por dados reais, confirmados com o hotel, antes de qualquer uso.
 * Horários de check-in/check-out e café da manhã vieram de listagens de
 * terceiros (Expedia/Trip.com) e também precisam de confirmação.
 */
export const hotel = {
  nome: 'Hotel Winner',
  cidade: 'Barretos',
  uf: 'SP',
  // placeholder: vazio = modo conceitual (mostra a prévia da mensagem).
  // Para ativar, use o WhatsApp real, formato internacional, só dígitos (ex.: '5517999999999').
  whatsapp: '',
  telefone: '(00) 0000-0000', // placeholder
  email: 'reservas@exemplo.com.br', // placeholder
  endereco: 'Endereço a confirmar, Barretos, SP', // placeholder
  // Check-in em minutos desde 00:00 (13h às 24h). Usado pelo relógio da barra de reserva.
  checkInAbre: 13 * 60,
  checkInFecha: 24 * 60,
  checkIn: '13h às 24h',
  checkOut: 'até 12h',
  cafe: 'Continental',
  fuso: 'America/Sao_Paulo',
} as const;

/**
 * `foto`: caminho da foto real (ex.: '/fotos/quarto-standard.jpg', arquivo em /public/fotos).
 * Enquanto estiver vazio, o site mostra a ilustração indicada em `variante`.
 */
export const quartos = [
  {
    id: 'standard', nome: 'Standard', max: 2, cama: 'Casal ou duas de solteiro', variante: 'standard', foto: '',
    resumo: 'O essencial bem resolvido para quem chega depois da estrada e sai cedo.',
    itens: ['Banheiro privativo', 'Mesa de trabalho (a confirmar)', 'Café da manhã incluso'],
  },
  {
    id: 'superior', nome: 'Superior', max: 3, cama: 'Queen ou king', variante: 'superior', foto: '',
    resumo: 'Mais espaço para estadias longas ou para quem prefere descansar sem pressa.',
    itens: ['Área de estar (a confirmar)', 'Banheiro privativo', 'Café da manhã incluso'],
  },
  {
    id: 'familia', nome: 'Família', max: 4, cama: 'Casal e solteiros', variante: 'familia', foto: '',
    resumo: 'Todo mundo no mesmo quarto, com lugar para a bagagem de todo mundo.',
    itens: ['Até quatro hóspedes', 'Banheiro privativo', 'Pergunte por berço ao reservar'],
  },
] as const;

export const experiencias = [
  {
    id: 'festa', titulo: 'Para a Festa do Peão', cena: 'campo', foto: '', quarto: 'superior',
    texto: 'Em agosto e nos feriados prolongados, Barretos recebe gente do Brasil inteiro. Quem reserva cedo escolhe o quarto; quem deixa para depois fica com o que sobrou.',
    dicas: ['Reserve com semanas de antecedência', 'Saiu tarde do evento? O check-in vai até meia-noite', 'Café da manhã antes de voltar para a estrada'],
  },
  {
    id: 'trabalho', titulo: 'Para quem viaja a trabalho', cena: 'estrada', foto: '', quarto: 'standard',
    texto: 'Quem viaja a trabalho precisa de horário flexível na chegada e de saída sem fila na manhã seguinte.',
    dicas: ['Check-in das 13h às 24h', 'Check-out até 12h', 'Avise a chegada tardia ao reservar'],
  },
  {
    id: 'familia', titulo: 'Para ficar em família', cena: 'alvorada', foto: '', quarto: 'familia',
    texto: 'Para fins de semana e visitas a parentes, o quarto Família junta todo mundo e mantém a bagagem fora do caminho.',
    dicas: ['Quarto para até quatro hóspedes', 'Café da manhã para todos', 'Peça berço ou cama extra na hora da reserva'],
  },
] as const;
