package com.unincor.biblioteca.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unincor.biblioteca.model.domain.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
