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
    let agregar=parseInt(document.getElementById("soyElCarro").innerHTML);
    console.log(agregar);
    let destacados = document.getElementById("soyElCarro")
    destacados.innerHTML=`${++agregar}`;
    return agregar
}