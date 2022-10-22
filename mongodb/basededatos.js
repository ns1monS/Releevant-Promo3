// Tabla unsuario con una sola fila
const usuario = {
  nombre: "Mariano",
  apellidos: "Romero Quintana",
  direccion: "c/ sor prat de loreet ,15,26001",
};

console.log("USUARIO", usuario);

//tabla de usuarios con mas de una fila

const usuarios = [
  {
    nombre: "Mariano",
    apellidos: "Romero Quintana",
    direccion: "c/ sor prat de loreet ,15,26001",
  },
  {
    nombre: "aurora",
    apellidos: "benitez agosto",
    direccion: "c/ la malagueta,15,26001",
  },
];

console.log("USUARIOS", usuarios);


//tabla con usuarios y tarjetas asociadas
const usuariosConTarjeta = {
  nombre: "Antonio",
  apellidos: "Moreira cansado",
  direccion: "Avenida maria de dolores",
  tarjetas: [
    {
      titular: "manolo bombo",
      tarjeta: "1111 2222 3333 4444",
      caducidad: "0427",
      baja: 0,
      fechaBaja: "",
    },
    {
      titular: "rosario manguitos",
      tarjeta: "5555 6666 7777 8888",
      caducidad: "0247",
      baja: 1,
      fechaBaja: "10/10/2023",
    },
  ],
};


console.log("Usuarios con tarjeta",usuariosConTarjeta)

console.log("Tarjetas",usuariosConTarjeta.tarjetas)

console.log("Tarjetas",usuariosConTarjeta.tarjetas[0])