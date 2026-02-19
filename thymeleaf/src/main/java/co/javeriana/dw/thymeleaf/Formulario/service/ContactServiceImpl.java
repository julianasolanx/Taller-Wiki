package co.javeriana.dw.thymeleaf.Formulario.service;

import co.javeriana.dw.thymeleaf.Formulario.Contact;
import co.javeriana.dw.thymeleaf.repository.ContactRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;

    public ContactServiceImpl(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    @Transactional
    public Contact save(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Contact> findAll() {
        return contactRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Contact> findByEmail(String email) {
        return contactRepository.findByEmail(email);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        contactRepository.deleteById(id);
    }
}
