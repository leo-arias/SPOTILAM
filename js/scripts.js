// Recuperar el nombre de usuario del localStorage
var nombreGuardado = localStorage.getItem("nombreDeUsuario");

let nombre = document.getElementById("nombre-usuario");
nombre.textContent = nombreGuardado;