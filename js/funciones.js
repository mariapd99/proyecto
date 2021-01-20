function cerrarSesion() {

  var r = confirm("¿Seguro que quieres cerrar la sesión?");
  if (r == true) {
    window.location='inicio.html';
  }

}