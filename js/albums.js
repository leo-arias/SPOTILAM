document.addEventListener('DOMContentLoaded', function() {
    const starButtons = document.querySelectorAll('.container-star input');

    starButtons.forEach(function(button) {
        button.addEventListener('change', function() {
            const album = this.closest('.album');
            album.classList.toggle('favorito');

            const favoritos = document.querySelectorAll('.album.favorito');
            const contenido = document.querySelector('.grid');
            
            if (favoritos.length > 0) {
                contenido.style.display = 'grid';
            } else {
                contenido.style.display = 'none';
            }
        });
    });
});
