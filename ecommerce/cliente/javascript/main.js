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


          let htmlContent = "<div class=carousel-inner>"
      for (i = 0; i < producto.length; i++) {
        console.log(i);
         htmlContent += `<div class=carousel-item>
                          <img src=${producto[i].foto} class=d-block w-100 >
                          <div class=carousel-caption>
                            <h5 class=display-2>${producto[i].nombre}</h5>
                            <p>Compralo por :  ${producto[i].precio}€</p>
                            <a href=# class=btn btn-primary>Comprar</a>
                          </div>
                        </div>`;
      }
          htmlContent += "</div>"
      usersDiv.innerHTML = htmlContent;
    }
  };
  let url = `http://127.0.0.1:8000/productosdestacados`;
  request.open("GET", url, true);
  request.send();
}
