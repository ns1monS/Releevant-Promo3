const { MongoClient, CancellationToken } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");
let array = [];
client
  .connect()
  .then(function () {
    console.log("Conectado!");
    //comando mongodb: use ecommerce
    client
      //ejercicio 4
      // .db("ecommerce")
      // .collection("pedidos")
      // .find({})
      // .forEach(function (documento) {
      //   array.push ([documento.producto[0].cantidad,documento.usuario]);
      // })
      // .then(function () {
      //   let mayor = 0
      //   for (let i = 0; i < array.length; i++) {
      //     if (array[i][0] > mayor){
      //       mayor = array[i]
      //     }
      //   }
      //   console.log(mayor);

      //  })
      // .catch(function () {
      //   console.log("Error en el find");
      // })
      //ejercicio 5
      .db("ecommerce")
      .collection("pedidos")
      .find({})
      .forEach(function (documento) {
        array.push([
          documento.total,
          documento.producto[0].categoria,
          documento.producto[0].nombre,
        ]);
      })
      .then(function () {
        let mayor = 0
        for (let i = 0; i < array.length; i++) {
          if (array[i][0] > mayor){
            mayor = array[i]
          }
        }
        console.log(mayor);
      })
      .catch(function () {
        console.log("Error en el find");
      })
      //ejercicio 2
      .db("ecommerce")
      .collection("usuarios")
      .find({})
      .forEach(function (documento) {})
      .then(function () {
        console.log("Find correcto");
      })
      .catch(function () {
        console.log("Error en el find");
      })
      //ejercicio 5
      .db("ecommerce")
      .collection("usuarios")
      .find({})
      .forEach(function (documento) {})
      .then(function () {
        console.log("Find correcto");
      })
      .catch(function () {
        console.log("Error en el find");
      });
  })
  .catch(function () {
    console.log("Error, no se ha podido conectar");
  });
