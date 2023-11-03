// Obtén una referencia al contenedor del PopUp y al botón de cerrar
const popupContainer = document.getElementById("popup-container");
const closePopupButton = document.getElementById("close-popup");

// Muestra el PopUp al cargar la página
window.addEventListener("load", function() {
    popupContainer.style.display = "block";
});

// Cierra el PopUp al hacer clic en el botón "Cerrar"
closePopupButton.addEventListener("click", function() {
    popupContainer.style.display = "none";
});


$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
});

document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendario");
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: ["dayGrid"],
      locale: "es",
      events: [
        {
          title: "Taylor Swift",
          start: "2023-11-09",
          end: "2023-11-11",
        }
      ],
    });
  
    calendar.render();
});
  