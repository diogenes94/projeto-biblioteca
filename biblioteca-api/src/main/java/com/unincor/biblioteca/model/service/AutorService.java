package com.unincor.biblioteca.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;

import com.unincor.biblioteca.exception.NegocioException;
import com.unincor.biblioteca.exception.RecursoNaoEncontradoException;
import com.unincor.biblioteca.model.domain.Autor;
import com.unincor.biblioteca.model.repository.AutorRepository;
import com.unincor.biblioteca.web.dto.AutorDTO;
import com.unincor.biblioteca.web.dto.AutorResponseDTO;

@Service
public class AutorService {

    @Autowired
    private AutorRepository autorRepository;

    public List<AutorResponseDTO> buscarTodos() {
        return autorRepository.findAll()
                .stream().map(AutorResponseDTO::fromEntity)
                .toList();
    }

    public AutorResponseDTO buscarPorId(Long id) {
        return AutorResponseDTO.fromEntity(
                autorRepository.findById(id)
                        .orElseThrow(() -> new RecursoNaoEncontradoException("Autor não encontrado")));
    }

    @Transactional
    public AutorResponseDTO inserir(AutorDTO dto) {
        return AutorResponseDTO.fromEntity(autorRepository.save(dto.toEntity()));
    }

    @Transactional
    public AutorResponseDTO atualizar(Long id, AutorDTO dto) {
        Autor autor = autorRepository.findById(id)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Autor não encontrado"));

        autor.setNome(dto.getNome());
        autor.setNacionalidade(dto.getNacionalidade());
        autor.setBiografia(dto.getBiografia());

        var autorUpdated = autorRepository.save(autor);
        return AutorResponseDTO.fromEntity(autorUpdated);
    }

    @Transactional
    public void excluir(Long id) {
        Autor autor = autorRepository.findById(id)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Autor não encontrado"));

        if (!autor.getLivros().isEmpty()) {
            throw new NegocioException("Não é possível excluir um autor que possui livros cadastrados.");
        }

        autorRepository.delete(autor);
    }

}
