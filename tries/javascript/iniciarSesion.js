function verificarUsuario() {
  const email = "noelsimonaguilar@gmail.com";
  const contraseña = "noelsimon1";

  if (
    document.getElementById("floatingInput").value === email &&
    document.getElementById("floatingPassword").value === contraseña
  ) {
  } else {
    const elementos = document.getElementsByClassName("displayNone");
    for (let i = 0; i < elementos.length; i++) {
      if (elementos[i].id == "mensajeError") {
        elementos[i].style.display = "flex";
      }
    }
  }
}

