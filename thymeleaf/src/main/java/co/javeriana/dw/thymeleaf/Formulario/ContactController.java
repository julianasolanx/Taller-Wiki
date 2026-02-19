package co.javeriana.dw.thymeleaf.Formulario;

import co.javeriana.dw.thymeleaf.Formulario.service.ContactService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

@Controller
@RequestMapping("/formulario")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping
    public String mostrarFormulario(Model model) {
        model.addAttribute("contact", new Contact());
        model.addAttribute("contacts", contactService.findAll());
        return "formulario";
    }

    @PostMapping
    public String guardarFormulario(@ModelAttribute("contact") Contact contact, Model model) {

        // persiste el contacto en la base de datos
        contactService.save(contact);
        System.out.println("Guardado en BD: " + contact);

        model.addAttribute("contact", new Contact());
        model.addAttribute("contacts", contactService.findAll());
        model.addAttribute("successMessage", "Respuesta guardada correctamente");
        return "formulario";
    }

    @GetMapping("/list")
    @ResponseBody
    public List<Contact> listarContactos() {
        return contactService.findAll();
    }

    @PostMapping("/delete/{id}")
    public String borrarUno(@PathVariable("id") Long id) {
        contactService.deleteById(id);
        return "redirect:/formulario";
    }
}

