// Recuperar el nombre de usuario del localStorage
const nombreGuardado = localStorage.getItem("nombreDeUsuario");

// Actualiza el nombre de usuario
let nombre = document.getElementById("nombre-usuario");
nombre.textContent = nombreGuardado;

// Recuperar la cancion sonando del localStorage
const nombreCancion = localStorage.getItem("nombreDeCancion");
const nombreAlbum = localStorage.getItem("nombreDeAlbum");
const imagenAlbum = localStorage.getItem("imagenDeAlbum");

// Actualiza la imagen y el texto de la canción sonando
let cancionSonandoImagen = document.getElementById("cancionSonandoImagen");
let cancionSonandoTitulo = document.getElementById("cancionSonandoTitulo");
let cancionSonandoArtista = document.getElementById("cancionSonandoArtista");

cancionSonandoImagen.src = imagenAlbum;
cancionSonandoTitulo.textContent = nombreCancion;
cancionSonandoArtista.textContent = nombreAlbum;