// Dados simulados para a Fase 1 da aula (sem precisar do Java/MySQL ainda)

export let mockAutores = [
  { id: 1, nome: 'Machado de Assis', nacionalidade: 'Brasileira' },
  { id: 2, nome: 'George Orwell', nacionalidade: 'Britânica' },
  { id: 3, nome: 'Clarice Lispector', nacionalidade: 'Brasileira' },
];

export let mockLivros = [
  { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis', isbn: '9788535914849', anoPublicacao: 1899 },
  { id: 2, titulo: '1984', autor: 'George Orwell', isbn: '9788535902778', anoPublicacao: 1949 },
  { id: 3, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', isbn: '9788522031443', anoPublicacao: 1943 },
  { id: 4, titulo: 'A Revolução dos Bichos', autor: 'George Orwell', isbn: '9788535909555', anoPublicacao: 1945 },
  { id: 5, titulo: 'A Hora da Estrela', autor: 'Clarice Lispector', isbn: '9788532508126', anoPublicacao: 1977 },
];

export let mockClientes = [
  { id: 1, nome: 'Ana Souza', email: 'ana.souza@email.com', telefone: '(11) 98765-4321' },
  { id: 2, nome: 'Carlos Eduardo', email: 'carlos.eduardo@email.com', telefone: '(21) 99876-5432' },
  { id: 3, nome: 'Mariana Lima', email: 'mariana.lima@email.com', telefone: '(31) 97654-3210' },
];

export let mockEmprestimos = [
  { id: 1, livroTitulo: '1984', leitor: 'Ana Souza', dataEmprestimo: '2026-10-15', dataDevolucao: '2026-10-29', status: 'ATIVO' },
  { id: 2, livroTitulo: 'Dom Casmurro', leitor: 'Carlos Eduardo', dataEmprestimo: '2026-10-01', dataDevolucao: '2026-10-15', status: 'DEVOLVIDO' },
];
