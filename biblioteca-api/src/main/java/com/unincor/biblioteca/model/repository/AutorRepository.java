package com.unincor.biblioteca.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unincor.biblioteca.model.domain.Autor;

public interface AutorRepository extends JpaRepository<Autor, Long> {

}
