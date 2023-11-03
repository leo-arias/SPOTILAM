const songNameHeader = document.getElementById("songNameHeader");
const albumNameHeader = document.getElementById("albumNameHeader");
let songNameAscending = true;
let albumNameAscending = true;

songNameHeader.addEventListener("click", () => {
    sortTable(1, songNameAscending);
    songNameAscending = !songNameAscending;
});

albumNameHeader.addEventListener("click", () => {
    sortTable(2, albumNameAscending);
    albumNameAscending = !albumNameAscending;
});

function sortTable(columnIndex, ascending) {
    const table = document.querySelector("table");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    rows.sort((a, b) => {
        const cellA = a.querySelectorAll("td")[columnIndex].textContent.trim();
        const cellB = b.querySelectorAll("td")[columnIndex].textContent.trim();
        return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    rows.forEach(row => tbody.appendChild(row));
}

// Obtén una referencia a la tabla y todas las filas de la tabla
const tabla = document.querySelector("table");
const filas = tabla.querySelectorAll("tr");

// Itera a través de las filas de la tabla (comenzando desde la segunda fila, ya que la primera es la cabecera)
for (let i = 1; i < filas.length; i++) {
    const fila = filas[i];
    // Agrega un evento clic a cada fila de la tabla
    fila.addEventListener("click", function () {
        // Obtén los elementos relevantes de la fila seleccionada
        const nombreCancion = fila.querySelector(".nombre-cancion").textContent;
        const nombreAlbum = fila.querySelector(".nombre-album").textContent;
        const imagenAlbum = fila.querySelector(".album-imagen").src;

        // Actualiza la imagen y el texto de la canción sonando
        const cancionSonandoImagen = document.getElementById("cancionSonandoImagen");
        const cancionSonandoTitulo = document.getElementById("cancionSonandoTitulo");
        const cancionSonandoArtista = document.getElementById("cancionSonandoArtista");

        cancionSonandoImagen.src = imagenAlbum;
        cancionSonandoTitulo.textContent = nombreCancion;
        cancionSonandoArtista.textContent = nombreAlbum;
    });
}

