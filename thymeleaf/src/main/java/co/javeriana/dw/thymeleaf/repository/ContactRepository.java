package co.javeriana.dw.thymeleaf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import co.javeriana.dw.thymeleaf.Formulario.Contact;
import java.util.Optional;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
	Optional<Contact> findByEmail(String email);
}
