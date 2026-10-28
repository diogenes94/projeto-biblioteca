package com.unincor.biblioteca.config;

import java.time.Instant;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.unincor.biblioteca.exception.NegocioException;
import com.unincor.biblioteca.exception.RecursoNaoEncontradoException;
import com.unincor.biblioteca.exception.StandardError;
import com.unincor.biblioteca.exception.ValidationError;

import jakarta.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RecursoNaoEncontradoException.class)
    public ResponseEntity<StandardError> handleRecursoNaoEncontradoException(RecursoNaoEncontradoException ex,
            HttpServletRequest request) {
        HttpStatus status = HttpStatus.NOT_FOUND;
        StandardError error = new StandardError(Instant.now(), status.value(), "Recurso não encontrado",
                ex.getMessage(), request.getRequestURI());
        return ResponseEntity.status(status).body(error);
    }

    @ExceptionHandler(NegocioException.class)
    public ResponseEntity<ValidationError> handleValidationError(MethodArgumentNotValidException ex,
            HttpServletRequest request) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        ValidationError error = new ValidationError(Instant.now(), status.value(), "Regra de negócios violada",
                ex.getMessage(), request.getRequestURI());
        return ResponseEntity.status(status).body(error);
    }

}
