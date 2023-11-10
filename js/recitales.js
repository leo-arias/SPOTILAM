// Variables de una referencia al contenedor del PopUp y al botón de cerrar
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
          title: "TAYLOR SWIFT",
          start: "2023-11-09",
        },
        {
          title: "TAYLOR SWIFT",
          start: "2023-11-10",
        },
        {
          title: "Taylor Swift",
          start: "2023-11-11",
        },
        {
          title: "RED HOT CHILI PEPPERS",
          start: "2023-11-24"
        },
        {
          title: "RED HOT CHILI PEPPERS",
          start: "2023-11-26"
        },
        {
          title: "DUKI",
          start: "2023-12-03"
        },
        {
          title: "DUKI",
          start: "2023-12-02"
        },
        {
          title: "ROGER WATERS",
          start: "2023-11-21"
        },
        {
          title: "ROGER WATERS",
          start: "2023-11-22"
        },
        {
          title: "TAN BIONICA",
          start: "2023-12-08"
        },
        {
          title: "MARIA BECERRA",
          start: "2023-11-17"
        },
        {
          title: "MARIA BECERRA",
          start: "2023-11-18"
        }
      ],
    });
  
    calendar.render();
});
  