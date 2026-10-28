package com.unincor.biblioteca.web.dto;

import com.unincor.biblioteca.model.domain.Autor;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AutorDTO {
    @NotBlank(message = "O nome do autor é obrigatório.")
    @Size(min = 3, max = 100, message = "O nome deve ter entre 3 e 100 caracteres.")
    private String nome;

    @Size(max = 80, message = "A nacionalidade deve ter no máximo 80 caracteres.")
    private String nacionalidade;

    @Size(max = 500, message = "A biografia deve ter no máximo 500 caracteres.")
    private String biografia;

    public Autor toEntity() {
        Autor autor = new Autor();
        autor.setNome(this.nome);
        autor.setNacionalidade(this.nacionalidade);
        autor.setBiografia(this.biografia);
        return autor;
    }

}
