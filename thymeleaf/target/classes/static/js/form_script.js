document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       TAB SYSTEM
    ========================== */
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            const tabId = button.getAttribute("data-tab");

            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            button.classList.add("active");

            const target = document.getElementById(tabId);
            if (target) {
                target.classList.add("active");
            }
        });
    });

    /* =========================
       FORM VALIDATION
    ========================== */

    const form = document.getElementById('contactForm');
    if (!form) return; // Safety check

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');
    const submitBtn = document.getElementById('submitBtn');
    const charCounter = document.getElementById('charCounter');

    function validarNombre() {
        const valor = nombre.value.trim();
        const error = document.getElementById('nombreError');
        const success = document.getElementById('nombreSuccess');

        if (valor.length >= 3) {
            nombre.classList.remove('invalid');
            nombre.classList.add('valid');
            error.classList.remove('show');
            success.classList.add('show');
            return true;
        } else {
            nombre.classList.remove('valid');
            nombre.classList.add('invalid');
            error.classList.add('show');
            success.classList.remove('show');
            return false;
        }
    }

    function validarEmail() {
        const valor = email.value;
        const error = document.getElementById('emailError');
        const success = document.getElementById('emailSuccess');
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (regex.test(valor)) {
            email.classList.remove('invalid');
            email.classList.add('valid');
            error.classList.remove('show');
            success.classList.add('show');
            return true;
        } else {
            email.classList.remove('valid');
            email.classList.add('invalid');
            error.classList.add('show');
            success.classList.remove('show');
            return false;
        }
    }

    function validarTelefono() {
        const valor = telefono.value;
        const error = document.getElementById('telefonoError');
        const success = document.getElementById('telefonoSuccess');

        const soloNumeros = /^\d+$/.test(valor);

        if (soloNumeros && valor.length >= 7 && valor.length <= 15) {
            telefono.classList.remove('invalid');
            telefono.classList.add('valid');
            error.classList.remove('show');
            success.classList.add('show');
            return true;
        } else {
            telefono.classList.remove('valid');
            telefono.classList.add('invalid');
            error.classList.add('show');
            success.classList.remove('show');
            return false;
        }
    }

    function validarAsunto() {
        const valor = asunto.value;
        const error = document.getElementById('asuntoError');
        const success = document.getElementById('asuntoSuccess');

        if (valor !== '') {
            asunto.classList.remove('invalid');
            asunto.classList.add('valid');
            error.classList.remove('show');
            success.classList.add('show');
            return true;
        } else {
            asunto.classList.remove('valid');
            asunto.classList.add('invalid');
            error.classList.add('show');
            success.classList.remove('show');
            return false;
        }
    }

    function validarMensaje() {
        const valor = mensaje.value;
        const longitud = valor.length;
        const error = document.getElementById('mensajeError');
        const success = document.getElementById('mensajeSuccess');

        // Counter logic
        if (longitud === 0) {
            charCounter.textContent = 'Mínimo 20 caracteres';
            charCounter.classList.remove('invalid');
        } else if (longitud < 20) {
            charCounter.textContent = `Faltan ${20 - longitud} caracteres`;
            charCounter.classList.add('invalid');
        } else if (longitud <= 400) {
            charCounter.textContent = `${longitud}/400 caracteres`;
            charCounter.classList.remove('invalid');
        } else {
            charCounter.textContent = 'Máximo 400 caracteres';
            charCounter.classList.add('invalid');
        }

        if (longitud >= 20 && longitud <= 400) {
            mensaje.classList.remove('invalid');
            mensaje.classList.add('valid');
            error.classList.remove('show');
            success.classList.add('show');
            return true;
        } else {
            mensaje.classList.remove('valid');
            mensaje.classList.add('invalid');
            error.classList.add('show');
            success.classList.remove('show');
            return false;
        }
    }

    function validarFormulario() {
        const valido =
            validarNombre() &&
            validarEmail() &&
            validarTelefono() &&
            validarAsunto() &&
            validarMensaje();

        submitBtn.disabled = !valido;
        return valido;
    }

    // Listeners
    nombre.addEventListener('input', validarFormulario);
    email.addEventListener('input', validarFormulario);

    telefono.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
        validarFormulario();
    });

    asunto.addEventListener('change', validarFormulario);
    mensaje.addEventListener('input', validarFormulario);

    form.addEventListener('submit', function (e) {
        if (!validarFormulario()) {
            e.preventDefault(); // Only block if invalid
        }
        // If valid → Spring Boot handles submission
    });

    validarFormulario();
});
