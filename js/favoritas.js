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
