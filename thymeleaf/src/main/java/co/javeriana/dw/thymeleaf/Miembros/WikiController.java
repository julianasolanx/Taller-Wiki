package co.javeriana.dw.thymeleaf.Miembros;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WikiController {

    @GetMapping("/")
    public String home() {
        return "redirect:/project";
    }

    @GetMapping("/project")
    public String project(Model model) {
        model.addAttribute("projectName", "(Nobre Generico de Proyecto)");
        model.addAttribute("description", "El proyecto consta de un visor y editor de procesos empresariales, cuyo objetivo es permitir la visualización y edición de procesos asociados a una empresa.");
        model.addAttribute("activeTab", "project");
        return "project";
    }

    @GetMapping("/members")
    public String members(Model model) {
        model.addAttribute("activeTab", "members");

        model.addAttribute("members", List.of(
            new Member(1, "Juan Bello", "Manager", "email@email.com"),
            new Member(2, "Sara Rodriguez", "Backend", "email@email.com"),
            new Member(3, "Juliana Novoa", "Frontend", "email@email.com"),
            new Member(4, "Luis Bueno", "Database", "email@email.com"),
            new Member(5, "Jeison Alfonso", "QA", "email@email.com"),
            new Member(6, "Daniel Cristancho", "DevOps", "email@email.com")
        ));

        return "members";
    }
}

