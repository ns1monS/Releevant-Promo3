const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

client
  .connect()
  .then(function () {
    console.log("Conectado!");
    //comando mongodb: use ecommerce
    client
      .db("ecommerce")
      //comando mongodb: db.usuarios
      .collection("usuarios")
      //Comando mongodb: find
      .find({nombre: "larry"})
      .forEach(function(documento){
        if (documento.nombre == "sarandonga"){
        console.log(documento.nombre, documento.apellidos);
        }else {
            console.log("No existe");
        }
      })
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
