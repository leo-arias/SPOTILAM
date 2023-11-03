document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const albumGrid = document.getElementById('album-grid');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();

        const albums = albumGrid.querySelectorAll('.album');
        albums.forEach(function(album) {
            const albumName = album.querySelector('.nombre-album').textContent.toLowerCase();
            const artistName = album.querySelector('.nombre-artista').textContent.toLowerCase();

            if (albumName.includes(searchTerm) || artistName.includes(searchTerm)) {
                album.style.display = 'block';
            } else {
                album.style.display = 'none';
            }
        });
    });
});
