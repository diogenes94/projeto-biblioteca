import React from "react";
import { BookOpen, Users, UserCheck, BookmarkCheck, icons } from "lucide-react";

export default function Navbar({ telaAtiva, setTelaAtiva }) {

    const menus = [
        { id: 'autores', label: 'Autores', icon: Users },
        { id: 'livros', label: 'Livros', icon: BookOpen },
        { id: 'clientes', label: 'Clientes', icon: UserCheck },
        { id: 'emprestimos', label: 'Empréstimos', icon: BookmarkCheck }
    ]

    return (
        <nav className="top-nav">
            <div className="nav-brand">
                <BookOpen size={4} />
                <span>Biblioteca Simples</span>
            </div>
            <div className="nav-menu">
                {menus.map((m) => {
                    const Icon = m.icon;
                    const isActive = telaAtiva === m.id;
                    return (
                        <button key={m.id} className={`nav-btn ${isActive ? 'active' : ''}`}
                            onClick={() => setTelaAtiva(m.id)}
                        >
                            <Icon size={16} />
                            <span>{m.label}</span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
