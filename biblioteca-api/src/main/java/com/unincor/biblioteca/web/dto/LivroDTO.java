package com.unincor.biblioteca.web.dto;

import com.unincor.biblioteca.model.domain.Autor;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LivroDTO {
    @NotBlank(message = "O titulo é obrigatório")
    private String titulo;
    @NotBlank(message = "O isbn é obrigatório")
    private String isbn;
    @NotNull(message = "O ano de publicação é obrigatório")
    private Integer anoPublicacao;
    @NotNull(message = "A quantidade de exemplares é obrigatória")
    private Integer quantidadeExemplares;
    @NotNull(message = "O autor é obrigatório")
    private Autor autor;
}
