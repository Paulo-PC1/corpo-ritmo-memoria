export interface ContatoAcademia {
  nome: string;
  acao: string;
  detalhe: string;
  href: string;
  externo: boolean;
}

export const CONTATOS_ACADEMIA: ContatoAcademia[] = [
  { nome: 'WhatsApp', acao: 'Conversar', detalhe: '(12) 98152-8377', href: 'https://wa.me/5512981528377', externo: true },
  { nome: 'Instagram', acao: 'Seguir', detalhe: '@mindfitclubcj', href: 'https://www.instagram.com/mindfitclubcj', externo: true },
  { nome: 'E-mail', acao: 'Escrever', detalhe: 'mindfitcj@gmail.com', href: 'mailto:mindfitcj@gmail.com', externo: false }
];

export const WHATSAPP_ACADEMIA = 'https://wa.me/5512981528377';
export const INSTAGRAM_PROFESSOR = 'https://www.instagram.com/olivergenio';
