package co.javeriana.dw.thymeleaf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import co.javeriana.dw.thymeleaf.Formulario.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
