export interface EventoHistoria {
  periodo: string;
  texto: string;
}

export interface TermoGlossario {
  termo: string;
  definicao: string;
}

export interface Leitura {
  autor: string;
  obra: string;
  complemento: string;
}

export interface FotoAula {
  src: string;
  alt: string;
  legenda: string;
}

export const LINKS_NAV = [
  { href: '#projeto', texto: 'O projeto' },
  { href: '#historia', texto: 'História' },
  { href: '#resistencia', texto: 'Resistência' },
  { href: '#entrevista', texto: 'Entrevista' },
  { href: '#aula', texto: 'A aula' },
  { href: '#glossario', texto: 'Glossário' },
  { href: '#saiba', texto: 'Saiba mais' }
];

// Símbolo em linha: r = círculo vermelho, g = quadrado verde, x = espaço entre os grupos
// Grupos: 3 + 3 + 2 + 1 peças, como as linhas do logo
export const SIMBOLO_IF = [
  'r', 'g', 'g',
  'g', 'g', 'g',
  'g', 'g',
  'g'
];

export const LINHA_DO_TEMPO: EventoHistoria[] = [
  { periodo: 'Séculos XVI a XIX', texto: 'Povos africanos escravizados chegam ao Brasil e mantêm músicas, danças e crenças em batuques e rodas, muitas vezes em segredo.' },
  { periodo: '1695', texto: 'Zumbi, líder do Quilombo dos Palmares, é morto em 20 de novembro. A data inspira o Dia da Consciência Negra.' },
  { periodo: '1888', texto: 'A Lei Áurea abole a escravidão, mas sem políticas de inclusão para a população negra. As expressões culturais seguem vigiadas e desvalorizadas.' },
  { periodo: '1890', texto: 'O Código Penal da República passa a criminalizar a capoeira.' },
  { periodo: 'Início do século XX', texto: 'O samba se desenvolve em comunidades negras e suas rodas são, com frequência, reprimidas.' },
  { periodo: '1917', texto: '"Pelo Telefone" é gravado e considerado o primeiro samba gravado. O gênero nasce nas rodas das casas das tias baianas, como a de Tia Ciata, no Rio de Janeiro.' },
  { periodo: 'Década de 1930', texto: 'O samba passa a ser promovido como símbolo da identidade nacional.' },
  { periodo: '2003', texto: 'A Lei 10.639 torna obrigatório o ensino de história e cultura afro-brasileira nas escolas.' },
  { periodo: '2014', texto: 'A roda de capoeira é reconhecida pela UNESCO como patrimônio cultural imaterial da humanidade.' },
  { periodo: 'Hoje', texto: '[Escreva aqui a história do ritmo da aula e como ele chegou até o professor.]' }
];

export const FOTOS_AULA: FotoAula[] = [
  { src: '', alt: 'Foto principal da aula', legenda: '[Foto principal da aula]' },
  { src: '', alt: 'Instrumentos da aula', legenda: '[Foto: instrumentos]' },
  { src: '', alt: 'Movimento da dança', legenda: '[Foto: movimento]' },
  { src: '', alt: 'Foto ou vídeo curto', legenda: '[Foto ou vídeo curto]' }
];

export const GLOSSARIO: TermoGlossario[] = [
  { termo: 'Ancestralidade', definicao: 'Ligação com os antepassados e com os saberes, valores e memórias que eles deixaram.' },
  { termo: 'Resistência cultural', definicao: 'Modos de manter viva a própria cultura mesmo diante de proibição, preconceito ou apagamento.' },
  { termo: 'Democracia racial', definicao: 'Ideia de que o Brasil seria uma sociedade sem racismo. É criticada porque as desigualdades raciais continuam.' },
  { termo: 'Patrimônio imaterial', definicao: 'Saberes, celebrações e formas de expressão, como danças e músicas, reconhecidos como parte da cultura de um povo.' },
  { termo: 'Miscigenação', definicao: 'Mistura de povos e culturas. No Brasil, o termo também é debatido porque pode esconder desigualdades.' }
];

export const LEITURAS: Leitura[] = [
  { autor: 'Abdias do Nascimento', obra: 'O genocídio do negro brasileiro', complemento: '' },
  { autor: 'Kabengele Munanga', obra: 'Rediscutindo a mestiçagem no Brasil', complemento: '' },
  { autor: 'Lélia Gonzalez', obra: '', complemento: 'textos sobre cultura e identidade negra no Brasil' },
  { autor: '', obra: '', complemento: '[Adicione filmes, documentários e músicas do ritmo estudado.]' }
];