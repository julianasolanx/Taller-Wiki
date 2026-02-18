package co.javeriana.dw.thymeleaf.Formulario.service;

import co.javeriana.dw.thymeleaf.Formulario.Contact;
import java.util.List;
import java.util.Optional;

public interface ContactService {
    Contact save(Contact contact);

    List<Contact> findAll();

    Optional<Contact> findByEmail(String email);

    void deleteById(Long id);
}
