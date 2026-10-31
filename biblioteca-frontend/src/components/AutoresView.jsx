import React, { use, useEffect, useState } from "react";
import { getAutores } from "../services/api";
import { Edit2, Plus, Trash2 } from "lucide-react";

export default function AutoresView({ showNotification }) {

    const [autores, setAutores] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        nome: '',
        nacionalidade: '',
    });

    const carregarAutores = async () => {
        setLoading(true);
        try {
            const res = await getAutores();
            setAutores(res.data);
        } catch (err) {
            showNotification(err.message, 'error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        carregarAutores();
    }, []);

    return (
        <div>
            <div className="section-bar">
                <h2>Cadastro de Autores</h2>
                <button className="btn btn-primary" >
                    <Plus size={16} /> Adicionar Novo Autor
                </button>
            </div>

            <div className="table-card">
                {loading ? (<p className="loading-text">Carregando autores...</p>) :
                    autores.length === 0 ? (<p className="empty-text">Nenhum autor cadastrado no momento</p>)
                        : (
                            <table className="simple-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome do Autor</th>
                                        <th>Nacionalidade</th>
                                        <th style={{ textAlign: 'center' }}>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {autores.map((autor) => (
                                        <tr key={autor.id}>
                                            <td><code>{autor.id}</code></td>
                                            <td><strong>{autor.nome}</strong></td>
                                            <td>{autor.nacionalidade || 'Não informada'}</td>
                                            <td style={{ textAlign: 'center' }}>
                                                <div className="action-buttons">
                                                    <button className="btn btn-secondary btn-sm">
                                                        <Edit2 size={14} /> Alterar
                                                    </button>
                                                    <button className="btn btn-danger btn-sm">
                                                        <Trash2 size={14} /> Excluir
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
            </div>
        </div>
    );
}