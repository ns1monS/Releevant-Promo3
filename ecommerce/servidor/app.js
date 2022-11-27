let express = require("express");
let cors = require("cors");
let mysql = require("mysql");
let app = express();

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
  const email = request.body.email;
  const usuarioPedido = request.body.usuario;
  const tarjeta = request.body.tarjeta;
  const nombreTarjeta = request.body.nombre;
  const direccion = request.body.direccion;
  const cantidad = request.body.cantidad; 
  const productoPedido = request.body.prodcuto;

  conexion.connect(function (err) {
    if (err) {
      console.error("Error de conexion: " + err.stack);
      return;
    }
    console.log("Conectado a la base de datos");
  });

conexion.query("select email from usuario ")

  conexion.query(
    "insert into pedido (usuario,total,fecha,cupon,tarjeta,direccion,estado,envio,cantidad,producto)values(?,?,?,?,?,?,?,?,?,?)",
    [1, 20, 2/0/22, 1, 1,20,1,1,1,1],
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

app.listen(8000, function () {
  console.log("API lista para recibir llamadas ");
});
