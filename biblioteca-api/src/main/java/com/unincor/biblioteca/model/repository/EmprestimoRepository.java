package com.unincor.biblioteca.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unincor.biblioteca.model.domain.Emprestimo;
import com.unincor.biblioteca.model.domain.Emprestimo.StatusEmprestimo;

public interface EmprestimoRepository extends JpaRepository<Emprestimo, Long> {

    long countByLivroIdAndStatusEmprestimo(Long id, StatusEmprestimo status);
}
