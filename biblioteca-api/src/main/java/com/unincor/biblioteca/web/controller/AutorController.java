package com.unincor.biblioteca.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import com.unincor.biblioteca.model.service.AutorService;
import com.unincor.biblioteca.web.dto.AutorDTO;
import com.unincor.biblioteca.web.dto.AutorResponseDTO;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/autores")
@Tag(name = "Autor", description = "API de Autores")
public class AutorController {

    @Autowired
    private AutorService autorService;

    @GetMapping
    public ResponseEntity<List<AutorResponseDTO>> buscarTodos() {
        return ResponseEntity.ok(autorService.buscarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AutorResponseDTO> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(autorService.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<AutorResponseDTO> inserir(@Valid @RequestBody AutorDTO dto) {
        return ResponseEntity.ok(autorService.inserir(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AutorResponseDTO> atualizar(@PathVariable Long id, @Valid @RequestBody AutorDTO dto) {
        return ResponseEntity.ok(autorService.atualizar(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<AutorResponseDTO> excluir(@PathVariable Long id) {
        autorService.excluir(id);
        return ResponseEntity.noContent().build();
    }

}
