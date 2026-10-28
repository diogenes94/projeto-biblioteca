package com.unincor.biblioteca.web.dto;

import com.unincor.biblioteca.model.domain.Autor;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AutorResponseDTO {
    private Long id;
    private String nome;
    private String nacionalidade;
    private String biografia;
    private int totalLivros;

    public static AutorResponseDTO fromEntity(Autor autor) {
        return new AutorResponseDTO(autor.getId(), autor.getNome(), autor.getNacionalidade(), autor.getBiografia(),
                autor.getLivros().size());
    }
}
