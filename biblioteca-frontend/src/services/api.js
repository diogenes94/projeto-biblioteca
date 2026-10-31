import axios from 'axios';
import { mockLivros, mockAutores, mockClientes, mockEmprestimos } from './mockData';


export const USE_MOCK = true;

// Configuração do Axios para comunicação com o backend Spring Boot
const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Interceptor do Axios: traduz as respostas de erro do @RestControllerAdvice para o usuário
api.interceptors.response.use(
  (response) => response,
  (error) => {
    let mensagemAmigavel = 'Ocorreu um erro ao comunicar com o servidor.';

    if (error.response) {
      const data = error.response.data;
      if (data.erros && Array.isArray(data.erros)) {
        mensagemAmigavel = data.erros.map(e => `• ${e.campo}: ${e.mensagem}`).join('\n');
      } else if (data.message) {
        mensagemAmigavel = data.message;
      }
    } else if (error.request) {
      mensagemAmigavel = 'Não foi possível conectar ao servidor Spring Boot na porta 8080. Verifique se a API está em execução.';
    }

    return Promise.reject(new Error(mensagemAmigavel));
  }
);

// ==========================================
// 1. AUTORES (CRUD)
// ==========================================
export const getAutores = async () => {
  if (USE_MOCK) return { data: [...mockAutores] };
  return api.get('/autores');
};

export const createAutor = async (autor) => {
  if (USE_MOCK) {
    const novo = {
      id: Date.now(),
      nome: autor.nome,
      nacionalidade: autor.nacionalidade || '',
    };
    mockAutores.push(novo);
    return { data: novo };
  }
  return api.post('/autores', autor);
};

export const updateAutor = async (id, autor) => {
  if (USE_MOCK) {
    const index = mockAutores.findIndex(a => a.id === Number(id));
    if (index !== -1) {
      mockAutores[index] = {
        ...mockAutores[index],
        nome: autor.nome,
        nacionalidade: autor.nacionalidade || '',
      };
    }
    return { data: mockAutores[index] };
  }
  return api.put(`/autores/${id}`, autor);
};

export const deleteAutor = async (id) => {
  if (USE_MOCK) {
    const index = mockAutores.findIndex(a => a.id === Number(id));
    if (index !== -1) mockAutores.splice(index, 1);
    return { data: null };
  }
  return api.delete(`/autores/${id}`);
};

// ==========================================
// 2. LIVROS (CRUD)
// ==========================================
export const getLivros = async () => {
  if (USE_MOCK) return { data: [...mockLivros] };
  return api.get('/livros');
};

export const createLivro = async (livro) => {
  if (USE_MOCK) {
    const novo = {
      id: Date.now(),
      titulo: livro.titulo,
      autor: livro.autor,
      isbn: livro.isbn,
      anoPublicacao: Number(livro.anoPublicacao),
    };
    mockLivros.push(novo);
    return { data: novo };
  }
  return api.post('/livros', livro);
};

export const updateLivro = async (id, livro) => {
  if (USE_MOCK) {
    const index = mockLivros.findIndex(l => l.id === Number(id));
    if (index !== -1) {
      mockLivros[index] = {
        ...mockLivros[index],
        titulo: livro.titulo,
        autor: livro.autor,
        isbn: livro.isbn,
        anoPublicacao: Number(livro.anoPublicacao),
      };
    }
    return { data: mockLivros[index] };
  }
  return api.put(`/livros/${id}`, livro);
};

export const deleteLivro = async (id) => {
  if (USE_MOCK) {
    const index = mockLivros.findIndex(l => l.id === Number(id));
    if (index !== -1) mockLivros.splice(index, 1);
    return { data: null };
  }
  return api.delete(`/livros/${id}`);
};

// ==========================================
// 3. CLIENTES (CRUD)
// ==========================================
export const getClientes = async () => {
  if (USE_MOCK) return { data: [...mockClientes] };
  return api.get('/clientes');
};

export const createCliente = async (cliente) => {
  if (USE_MOCK) {
    const novo = {
      id: Date.now(),
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone || '',
    };
    mockClientes.push(novo);
    return { data: novo };
  }
  return api.post('/clientes', cliente);
};

export const updateCliente = async (id, cliente) => {
  if (USE_MOCK) {
    const index = mockClientes.findIndex(c => c.id === Number(id));
    if (index !== -1) {
      mockClientes[index] = {
        ...mockClientes[index],
        nome: cliente.nome,
        email: cliente.email,
        telefone: cliente.telefone || '',
      };
    }
    return { data: mockClientes[index] };
  }
  return api.put(`/clientes/${id}`, cliente);
};

export const deleteCliente = async (id) => {
  if (USE_MOCK) {
    const index = mockClientes.findIndex(c => c.id === Number(id));
    if (index !== -1) mockClientes.splice(index, 1);
    return { data: null };
  }
  return api.delete(`/clientes/${id}`);
};

// ==========================================
// 4. EMPRÉSTIMOS (CRUD)
// ==========================================
export const getEmprestimos = async () => {
  if (USE_MOCK) return { data: [...mockEmprestimos] };
  return api.get('/emprestimos');
};

export const createEmprestimo = async (emp) => {
  if (USE_MOCK) {
    const novo = {
      id: Date.now(),
      livroTitulo: emp.livroTitulo,
      leitor: emp.leitor,
      dataEmprestimo: emp.dataEmprestimo,
      dataDevolucao: emp.dataDevolucao,
      status: emp.status || 'ATIVO',
    };
    mockEmprestimos.push(novo);
    return { data: novo };
  }
  return api.post('/emprestimos', emp);
};

export const updateEmprestimo = async (id, emp) => {
  if (USE_MOCK) {
    const index = mockEmprestimos.findIndex(e => e.id === Number(id));
    if (index !== -1) {
      mockEmprestimos[index] = {
        ...mockEmprestimos[index],
        livroTitulo: emp.livroTitulo,
        leitor: emp.leitor,
        dataEmprestimo: emp.dataEmprestimo,
        dataDevolucao: emp.dataDevolucao,
        status: emp.status || mockEmprestimos[index].status,
      };
    }
    return { data: mockEmprestimos[index] };
  }
  return api.put(`/emprestimos/${id}`, emp);
};

export const deleteEmprestimo = async (id) => {
  if (USE_MOCK) {
    const index = mockEmprestimos.findIndex(e => e.id === Number(id));
    if (index !== -1) mockEmprestimos.splice(index, 1);
    return { data: null };
  }
  return api.delete(`/emprestimos/${id}`);
};

export default api;
