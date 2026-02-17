package co.javeriana.dw.thymeleaf.Formulario;

import co.javeriana.dw.thymeleaf.Formulario.Contact;
import co.javeriana.dw.thymeleaf.repository.ContactRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/formulario")
public class ContactController {

    @GetMapping
    public String mostrarFormulario(Model model) {
        model.addAttribute("contact", new Contact());
        return "formulario";
    }

    @PostMapping
    public String guardarFormulario(@ModelAttribute("contact") Contact contact) {

        // Here you would save it to the database
        System.out.println(contact +"\n"+ contact.getNombre() +"\n"+ contact.getAsunto() +"\n"+ contact.getMensaje());

        return "redirect:/formulario?success";
    }
}

