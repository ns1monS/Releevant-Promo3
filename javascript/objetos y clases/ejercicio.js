function ProductoAlimenticio(codigo, nombre, precio) {
  this.codigo = codigo;
  this.nombre = nombre;
  this.precio = precio;
  this.imprimeDatos = function () {
    console.log(
      `codigo: ${this.codigo} , nombre: ${this.nombre} , precio: ${this.precio}`
    );
  };
}

let manzana = new ProductoAlimenticio(2472, "manzana", "2€");
let peras = new ProductoAlimenticio(2473, "peras", "4€");
let fresas = new ProductoAlimenticio(2474, "fresas", "3€");

let productos = [manzana, peras, fresas];

for (p of productos) {
  p.imprimeDatos();
}

manzana.nombre = "Manzanas verdes"
manzana.codigo = 4455
manzana.precio = "5€"

manzana.imprimeDatos()