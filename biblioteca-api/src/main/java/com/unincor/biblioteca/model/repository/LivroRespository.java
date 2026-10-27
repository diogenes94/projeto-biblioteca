package com.unincor.biblioteca.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unincor.biblioteca.model.domain.Livro;

public interface LivroRespository extends JpaRepository<Livro, Long> {

}
