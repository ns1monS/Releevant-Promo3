// function miFuncion() {
//   let container = document.getElementById("container");
//   container.innerHTML = "<p>Macarrones con tomate</p>";
// }
// Forma una pero no la de israel
// function agregarCarrito() {
//   let carrito = document.getElementById("soyElCarro");
//   carrito.innerHTML =sumandoElementos();

// }

// function sumandoElementos() {
//   let carrito = parseInt(document.getElementById("soyElCarro").innerHTML)+1;
//     return carrito
//   };

// forma de israel

function agregarCarrito() {
  let agregar = parseInt(document.getElementById("soyElCarro").innerHTML);
  console.log(agregar);
  let destacados = document.getElementById("soyElCarro");
  destacados.innerHTML = `${++agregar}`;
  return agregar;
}

function productosDestacados() {
  let request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);

    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);
      let usersDiv = document.getElementById("productosDestacados");
      const producto = response;

      let htmlContent = "";
      for (i = 0; i < producto.length; i++) {
        console.log(i);

        if (producto[i].length === producto[0].length) {
          htmlContent += `<div class="carousel-item active">
                          <img src=${producto[i].imagen} class="d-block w-100" >
                          <div class=carousel-caption>
                            <h5 class=display-2>${producto[i].nombre}</h5>
                            <p>Compralo por :  ${producto[i].precio}€</p>
                            <a href="productoInfo.html?id=${producto[i].id}" class="btn btn-primary">Comprar</a>
                          </div>
                        </div>`;
        } else
          htmlContent += `<div class="carousel-item">
                          <img src=${producto[i].imagen} class="d-block w-100" >
                          <div class=carousel-caption>
                            <h5 class=display-2>${producto[i].nombre}</h5>
                            <p>Compralo por :  ${producto[i].precio}€</p>
                            <a href="productoInfo.html?id=${producto[i].id}" class="btn btn-primary">Comprar</a>
                          </div>
                        </div>`;
      }
      usersDiv.innerHTML = htmlContent;
    }
  };
  let url = `http://127.0.0.1:8000/productosdestacados`;
  request.open("GET", url, true);
  request.send();
}

function detalleProducto() {
  let request = new XMLHttpRequest();
  let productId = new URLSearchParams(window.location.search).get("id");

  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);

    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);
      let usersDiv = document.getElementById("detalleProducto");
      const productoInfo = response;

      let htmlContent = "<div>";
      htmlContent += `<img src=${productoInfo.imagen}>`;
      htmlContent += `<li>${productoInfo.nombre}</li> `;
      htmlContent += `<li>Descripcion : ${productoInfo.opiniones}</li>`;
      htmlContent += `<li>opiniones :  ${productoInfo.categoria}</li>`;
      htmlContent += "</div>";

      usersDiv.innerHTML = htmlContent;
    }
  };
  let url = `http://127.0.0.1:8000/producto/${productId}`;
  request.open("GET", url, true);
  request.send();
}

function verificarUsuario() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);

    if (this.readyState == 4 && this.status == 200) {
      let usersDiv = document.getElementById("mensajeError");

      let acierto = "<div class=text-success>";
      acierto += "<p>usuario correcto</p>";
      acierto += "</div>";
      window.location.href = "index.html";

      usersDiv.innerHTML = acierto;
    } else if (this.readyState == 4 && this.status == 401) {
      let usersDiv = document.getElementById("mensajeError");

      let htmlContent = "<div>";
      htmlContent = "<p>Usuario InCorrecto</p>";
      htmlContent += "</div>";
      usersDiv.innerHTML = htmlContent;
    }
  };
  let emailUser = document.getElementById("floatingInput").value;
  let passwordUser = document.getElementById("floatingPassword").value;
  let body = {
    email: emailUser,
    password: passwordUser,
  };
  let url = `http://127.0.0.1:8000/login`;
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(body));
}

function registroUsuario() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);

    if (this.readyState == 4 && this.status == 200) {
      let usersDiv = document.getElementById("mensajeError");

      let acierto = "<div class=text-success>";
      acierto += "<p>el correo ya existe</p>";
      acierto += "</div>";

      usersDiv.innerHTML = acierto;
    } else if (this.readyState == 4 && this.status == 401) {
      let usersDiv = document.getElementById("mensajeError");

      let htmlContent = "<div>";
      htmlContent = "<p>Usuario creado</p>";
      htmlContent += "</div>";
      window.location.href = "index.html";

      usersDiv.innerHTML = htmlContent;
    }
  };
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let firstName = document.getElementById("firstName").value;
  let telefono = document.getElementById("telefono").value;
  let lastName = document.getElementById("lastName").value

  let body = {
    email: email,
    password: password,
    nombre: firstName,
    apellidos: lastName, 
    telefono: telefono,   

  };
  let url = `http://127.0.0.1:8000/signUp`;
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(body));
}
