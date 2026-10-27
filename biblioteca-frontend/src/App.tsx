import React, { useState, type FormEvent, type ChangeEvent } from "react";
import { Book, PlusCircle, Trash2, User, Search, Library } from 'lucide-react';
import type { Livro } from './types.tsx';

export default function App() {

    const [livros, setLivros] = useState<Livro[]>([
        {
            id: 1,
            titulo: "Clean Code",
            autor: "Robert C. Martin",
            ano_publicacao: 2008,
            isbn: "978-0132350884"
        },
        {
            id: 2,
            titulo: "The Pragmatic Programmer",
            autor: "Andrew Hunt",
            ano_publicacao: 2000,
            isbn: "978-0201616224"
        },
    ]);

    const [titulo, setTitulo] = useState<string>("");
    const [autor, setAutor] = useState<string>("");
    const [ano_publicacao, setAnoPublicacao] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("");

}
