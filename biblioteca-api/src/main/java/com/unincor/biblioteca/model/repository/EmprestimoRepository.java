package com.unincor.biblioteca.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unincor.biblioteca.model.domain.Emprestimo;

public interface EmprestimoRepository extends JpaRepository<Emprestimo, Long> {

}
