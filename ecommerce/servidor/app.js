let express = require("express");
let cors = require("cors")
let app = express();

app.use(cors());

app.get("/", function (request, response) {
  response.send("bienvenido a mi ecommerce");
});

app.get("/productosdestacados", function (request, response) {
  const productoUno = {
    foto: "../cliente/recursos/Gow.jpg",
    nombre: "God of war",
    stock: 100,
    precio: 10.9,
  };

  const productoDos = {
    foto: "../cliente/recursos/GowR.jpg",
    nombre: "God of war Ragnarok",
    stock: 10,
    precio: 60.9,
  }

  let prodcutos = [productoUno , productoDos]

  response.send(prodcutos)
});

app.post("/login" , function () {
    
})

app.listen(8000, function () {
  console.log("API lista para recibir llamadas ");
});
