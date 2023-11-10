function validarLogin() {
    // Obtener el valor del campo de usuario
    let nombreDeUsuario = document.getElementById("nombre").value;
    let password = document.getElementById("password").value;
    let nombreError = document.getElementById("nombre-error");
    let passwordError = document.getElementById("password-error");
    let nombreGuardado = localStorage.getItem("nombreDeUsuario");
    let contraGuardada = localStorage.getItem("contraseña");
    let validadoCompleto = true;

    // Verificar si el campo está vacío
    if (nombreDeUsuario === "") {
        nombreError.textContent = "Campo obligatorio.";
        validadoCompleto = false;
    } else if (nombreDeUsuario !== nombreGuardado) {
        nombreError.textContent = "El usuario es incorrecto";
        validadoCompleto = false;
    } else {
        nombreError.textContent = "";
    }

    // Verificar si el campo está vacío
    if (password === "") {
        passwordError.textContent = "Campo obligatorio.";
        validadoCompleto = false;
    } else if (password !== contraGuardada) {
        passwordError.textContent = "La contraseña es incorrecta";
        validadoCompleto = false;
    } else {
        passwordError.textContent = "";
    }

    // Si no están vacíos, te manda a index.html
    if (validadoCompleto) {
        window.location.href = "home.html";
    }
}

function validarRegistro() {
    let usuario = document.getElementById("usuario").value;
    let usuarioError = document.getElementById("usuario-error");
    let contra = document.getElementById("contraseña").value;
    let contraRepetida = document.getElementById("contraseñaRepetida").value;
    let contraError =  document.getElementById("contra-error");
    let contraRepetidaError =  document.getElementById("contra-repetida-error");
    let correo = document.getElementById("correo").value;
    let correoError =  document.getElementById("correo-error");
    let expresionRegularEmail = /^(.+\@.+\..+)$/;
    let fechaNac = document.getElementById("fecha-nac").value;
    let fechaError =  document.getElementById("fecha-error");
    let expresionRegularFecha = /^\d{4}\-\d{2}\-\d{2}$/ ;
    let checkbox = document.getElementById("checkbox");
    let checkboxError = document.getElementById("checkbox-error");
    let validadoCompleto = true;

    // Validar Usuario
    if (usuario === "") {
        usuarioError.textContent = "Campo obligatorio.";
        validadoCompleto = false;
    } else if (usuario.length < 4) {
        usuarioError.textContent = "El Usuario debe ser mayor a 4 caracteres.";
        validadoCompleto = false;
    } else if (usuario.length > 8) {
        usuarioError.textContent = "El Usuario debe ser menor a 8 caracteres.";
        validadoCompleto = false;
    } else  {
        usuarioError.textContent = "";
        localStorage.setItem("nombreDeUsuario", usuario);
    }

    // Validar Contraseña
    if (contra === "" || contraRepetida === "") {
        contraError.textContent = "Campo obligatorio.";
        contraRepetidaError.textContent = "Campo obligatorio."
        validadoCompleto = false;
    } else if (contraRepetida !== contra) {
        contraError.textContent = "Las contraseñas no coinciden."
        contraRepetidaError.textContent = "Las contraseñas no coinciden."
        validadoCompleto = false;
    } else  {
        contraError.textContent = "";
        contraRepetidaError.textContent = "";
        localStorage.setItem("contraseña", contra);
    }

    // Validar Email
    if (correo === "") {
        correoError.textContent = "Campo obligatorio.";
        validadoCompleto = false;
    } else if (expresionRegularEmail.test(correo) == false) {
        correoError.textContent = "Correo electrónico no válido.";
        validadoCompleto = false;
    } else  {
        correoError.textContent = "";
    }

    // Validar Fecha
    if (fechaNac === "") {
        fechaError.textContent = "Campo obligatorio.";
        validadoCompleto = false;
    } else if (expresionRegularFecha.test(fechaNac) == false) {
        console.log(fechaNac);
        fechaError.textContent = "Fecha no válida.";
        validadoCompleto = false;
    } else  {
        fechaError.textContent = "";
    }

    // Validar el checkbox
    if (!(checkbox.checked)) {
        checkboxError.textContent = "Debes aceptar los Términos y Condiciones.";
        validadoCompleto = false;
    } else {
        checkboxError.textContent = "";
    }

    // Si todos los campos son validos, te manda a index.html
    if (validadoCompleto) {
        window.location.href = "index.html";
    }
}