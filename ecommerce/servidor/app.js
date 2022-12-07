let express = require("express");
let cors = require("cors");
let mysql = require("mysql");
let app = express();
const { MongoClient } = require("mongodb");

const productoUno = {
  id: 0,
  foto: " ../cliente/recursos/Gow.jpg",
  nombre: "God of war",
  stock: 100,
  precio: 10.9,
  descripcion: "Soy la descripcion del producto 1 god of war ",
  opiniones: "me lo estoy pasando ahora y es increible ;)",
};

const productoDos = {
  id: 1,
  foto: "../cliente/recursos/GowR.jpg",
  nombre: "God of war Ragnarok",
  stock: 10,
  precio: 60.9,
  descripcion: "Soy la descripcion del producto 2 god of war Ragnarok",
  opiniones:
    "Un juego que todavia no he jugado pero espero que este pronto para pc ;)",
};

let usuarioUno = {
  email: "noelsimonaguilar@gmail.com",
  password: "1234",
};
let usuarioDos = {
  email: "simonaguilarnoel@gmail.com",
  password: "4321",
};

let usuarios = [usuarioUno, usuarioDos];

let prodcutos = [productoUno, productoDos];
//
//MySQL

let conexion = mysql.createConnection({
  host: "localhost",
  database: "ecommerce",
  user: "root",
  password: "Limalimon2002",
});

app.use(cors());
app.use(express.json());

app.get("/productosdestacados", function (request, response) {
  conexion.connect(function (err) {
    if (err) {
      console.error("Error de conexion: " + err.stack);
      return;
    }
    console.log("Conectado a la base de datos");
  });
  conexion.query(
    "SELECT * FROM productos",
    [],
    function (error, results, fields) {
      if (error) throw error;
      response.send(results);
    }
  );
});
app.get("/producto/:id", function (request, response) {
  conexion.connect(function (err) {
    if (err) {
      console.error("Error de conexion: " + err.stack);
      return;
    }
    console.log("Conectado a la base de datos");
  });
  const productoId = request.params.id;

  conexion.query(
    "SELECT * FROM productos where id = ? ",
    [productoId],
    function (error, results, fields) {
      if (error) throw error;

      response.send(results[0]);
    }
  );
});

app.post("/login", function (request, response) {
  console.log(request.body);
  const email = request.body.email;
  const password = request.body.password;
  conexion.connect(function (err) {
    if (err) {
      console.error("Error de conexion: " + err.stack);
      return;
    }
    console.log("Conectado a la base de datos");
  });

  conexion.query(
    "SELECT * FROM usuario where email = ? and password = ? ",
    [email, password],
    function (error, results, fields) {
      if (error) {
        console.log(error);
        return;
      } else {
        if (results.length > 0) {
          response.status(200).send();
        } else {
          response.status(401).send();
        }
      }
    }
  );
});
app.post("/signUp", function (request, response) {
  console.log(request.body);
  const email = request.body.email;
  const nombre = request.body.nombre;
  const apellidos = request.body.apellidos;
  const telefono = request.body.telefono;
  const password = request.body.password;

  conexion.connect(function (err) {
    if (err) {
      console.error("Error de conexion: " + err.stack);
      return;
    }
    console.log("Conectado a la base de datos");
  });

  conexion.query(
    "insert into usuario (email,password,telefono,nombre,apellidos)values(?,?,?,?,?)",
    [email, password, telefono, nombre, apellidos],
    function (error, results, fields) {
      if (error) {
        console.log(error);
        return;
      } else {
        response.send(results);
      }
    }
  );
});
app.post("/pedido", function (request, response) {
  console.log(request.body);
  let usuario = request.body.usuario;
  let total = request.body.total;
  let fecha = request.body.fecha;
  let cupon = request.body.cupon;
  let tarjeta = request.body.tarjeta;
  let direccion = request.body.direccion;
  let estado = request.body.estado;
  let envio = request.body.envio;
  let cantidad = request.body.envio;
  let producto = request.body.envio;

  conexion.connect(function (err) {
    if (err) {
      console.error("Error de conexion: " + err.stack);
      return;
    }
    console.log("Conectado a la base de datos");
  });
  conexion.query(
    "insert into pedido (usuario,total,fecha,cupon,tarjeta,direccion,estado,envio,cantidad,producto)values(?,?,?,?,?,?,?,?,?,?)",
    [
      usuario,
      total,
      fecha,
      cupon,
      tarjeta,
      direccion,
      estado,
      envio,
      cantidad,
      producto,
    ],
    function (error, results, fields) {
      if (error) {
        console.log(error);
        return;
      } else {
        response.send(results);
      }
    }
  );
});

// conexion.end(function (err) {
//   if (err) {
//     console.log("no se ha podido cerrar la conexion");
//     return;
//   }
//   console.log("conexion cerrada con mysql");
// });

// MongoDB

const mongoClient = new MongoClient("mongodb://localhost:27017");
//funcion para crear querys
function ejecutarQueryMongo(
  collection,
  filtro,
  orden,
  callbackPorDocumento,
  callback,
  error
) {
  mongoClient
    .db("ecommerce")
    .collection(collection)
    .find(filtro)
    .sort(orden)
    .forEach(callbackPorDocumento)
    .then(callback)
    .catch(error);
}

//servicios API

app.get("/", function (request, response) {
  response.send("bienvenido a mi ecommerce");
});

// app.get("/productosdestacados", function (request, response) {
//   response.send(prodcutos);
// });

// app.get("/producto/:id", function (request, response) {
//   const productoId = request.params.id;

//   for (let i = 0; i < prodcutos.length; i++) {
//     if (productoId === prodcutos.id) {
//       return productoId;
//     }
//   }

//   response.send(prodcutos[productoId]);
// });

// app.post("/login", function (request, response) {
//   const email = request.body.email;
//   const password = request.body.password;

//   console.log(email, password);

//   for (const usuario of usuarios) {
//     if (email === usuario.email && password === usuario.password) {
//       response.status(200).send();
//       console.log("usuario existe");
//     }
//   }

//   response.status(401).send();
// });

app.get("/listaproductos", function (request, response) {
  let productos = [];
  mongoClient
    .db("ecommerce")
    .collection("productos")
    .find()
    .forEach((producto) =>
      productos.push({
        id: producto._id,
        nombre: producto.nombre,
        foto: producto.foto,
      })
    )
    .then(() => response.send(productos))
    .catch(() => response.status(400).send());
});

app.get("/listapedidos", function (request, response) {
  let pedidos = [];
  ejecutarQueryMongo(
    "pedidos",
    {},
    { total: -1 },
    (pedido) =>
      pedidos.push({
        id: pedido._id,
        usuario: pedido.usuario,
        total: pedido.total,
        direccion: pedido.direccion
      }),
    () => response.send(pedidos),
    () => console.log("error")
  );
});

mongoClient
  .connect()
  .then(function () {
    const usuarios = mongoClient;
    ejecutarQueryMongo(
      "usuarios",
      {},
      {},
      (usuario) => console.log(usuario),
      () => console.log("okey"),
      () => console.log("error")
    );
    //.forEach((usuario) => console.log(usuario));

    app.listen(8000, function () {
      console.log("API lista para recibir llamadas ");
    });
  })
  .catch(function (error) {
    console.log("no se puede conectar", error);
  });
