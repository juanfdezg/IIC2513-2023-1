// Función para hacer responsiva la barra de navegación
function myFunction() {
    var x = document.getElementById("topNavbar");
    if (x.className === "navMenu") {
      x.className += " responsive";
    } else {
      x.className = "navMenu";
    }
  }