const documents = [
  {
    id: 1,
    approved: true,
    title: "Primeiro documento",
    subtitle: "subartigo 1",
    content:
      "Lorem ipsum dolor sit amet. Aut ratione sunt et labore nemo eum nulla sequi ea laudantium dignissimos aut blanditiis dolorem qui minus eligendi. Vel nulla eius eos libero assumenda quo similique corrupti. Aut quia aliquid sit dignissimos itaque id vitae tenetur At nobis atque et eius recusandae. Vel enim fugiat et nesciunt fugiat ut sapiente iure id adipisci earum in explicabo dolores aut unde commodi nam nobis dicta.",
    autor: "autor 1",
    linkFile:
      "https://doem.org.br/ba/modelo/arquivos/pdfviewer/0b517cdc5f9850e3782051c82e7f3234?name=lorem-ipsum.pdf", // mesmo do download???
    date: "11/07/23",
    type_id: 2,
    origin_id: 1,
    curator_id: 1,
  },
  {
    id: 2,
    approved: true,
    title: "Segundo documento",
    subtitle: "subartigo 2",
    content: "conteudo",
    autor: "autor 2",
    linkFile:
      "https://doem.org.br/ba/modelo/arquivos/pdfviewer/0b517cdc5f9850e3782051c82e7f3234?name=lorem-ipsum.pdf",
    date: "24/11/23",
    type_id: 3,
    origin_id: 1,
    curator_id: 1,
  },
  {
    id: 3,
    approved: true,
    title: "Terceiro documento",
    subtitle: "subartigo 3",
    content: "conteudo",
    autor: "autor 3",
    linkFile:
      "https://doem.org.br/ba/modelo/arquivos/pdfviewer/0b517cdc5f9850e3782051c82e7f3234?name=lorem-ipsum.pdf",
    date: "04/01/23",
    type_id: 1,
    origin_id: 4,
    curator_id: 1,
  },
  {
    id: 4,
    approved: true,
    title: "Quarto documento",
    subtitle: "subartigo 4",
    content: "conteudo",
    autor: "autor 4",
    linkFile:
      "https://doem.org.br/ba/modelo/arquivos/pdfviewer/0b517cdc5f9850e3782051c82e7f3234?name=lorem-ipsum.pdf",
    date: "02/01/23",
    type_id: 5,
    origin_id: 2,
    curator_id: 1,
  },
  {
    id: 5,
    approved: true,
    title: "Quinto documento",
    subtitle: "subartigo 5",
    content: "conteudo",
    autor: "autor 5",
    linkFile:
      "https://doem.org.br/ba/modelo/arquivos/pdfviewer/0b517cdc5f9850e3782051c82e7f3234?name=lorem-ipsum.pdf",
    date: "23/06/23",
    type_id: 4,
    origin_id: 5,
    curator_id: 1,
  },
  {
    id: 6,
    approved: true,
    title: "Sexto documento",
    subtitle: "subartigo 6",
    content: "conteudo",
    autor: "autor 6",
    linkFile:
      "https://doem.org.br/ba/modelo/arquivos/pdfviewer/0b517cdc5f9850e3782051c82e7f3234?name=lorem-ipsum.pdf",
    date: "18/10/23",
    type_id: 4,
    origin_id: 3,
    curator_id: 1,
  },
];

const tags = [
  {
    id: 1,
    tag: "Educação",
    num: "42",
  },
  {
    id: 2,
    tag: "Financeiro",
    num: "65",
  },
  {
    id: 3,
    tag: "Tecnologia",
    num: "98",
  },
  {
    id: 4,
    tag: "Dev",
    num: "76",
  },
  {
    id: 5,
    tag: "Filosofia",
    num: "35",
  },
  {
    id: 6,
    tag: "Matemática",
    num: "11",
  },
  {
    id: 7,
    tag: "Ciências",
    num: "65",
  },
  {
    id: 8,
    tag: "Capacitação",
    num: "22",
  },
  {
    id: 9,
    tag: "Identidade",
    num: "43",
  },
  {
    id: 10,
    tag: "Elaboração",
    num: "12",
  },
  {
    id: 11,
    tag: "Monitoria",
    num: "44",
  },
  {
    id: 12,
    tag: "Professores",
    num: "76",
  },
  {
    id: 13,
    tag: "Equipe",
    num: "98",
  },
  {
    id: 14,
    tag: "Numérico",
    num: "05",
  },
  {
    id: 15,
    tag: "Amostra",
    num: "55",
  },
  {
    id: 16,
    tag: "Ciêntifico",
    num: "76",
  },
  {
    id: 17,
    tag: "Texto",
    num: "60",
  },
];

const documents_tags = [
  {
    document_id: 1,
    tag_id: 2,
  },
  {
    document_id: 1,
    tag_id: 16,
  },
  {
    document_id: 1,
    tag_id: 17,
  },
];

const origins = [
  {
    id: 1,
    origin: "Sistemas de informação",
  },
  {
    id: 2,
    origin: "Direito",
  },
  {
    id: 3,
    origin: "Educação física",
  },
  {
    id: 4,
    origin: "Jornalismo",
  },
  {
    id: 5,
    origin: "Medicina",
  },
];

const types = [
  {
    id: 1,
    type: "Evento",
  },
  {
    id: 2,
    type: "Pesquisa",
  },
  {
    id: 3,
    type: "Graduação",
  },
  {
    id: 4,
    type: "Pos Graduação",
  },
];

module.exports = { documents, tags, documents_tags, types, origins };
