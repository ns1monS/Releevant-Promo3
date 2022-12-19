// importamos express
import express from "express";
// Creamos un router

import { USERS_BBDD } from "../bbdd.js";
// Creamos un router
const accountRouter = express.Router();

// Middleware. Se ejecutará siempre antes del endpoint al que se llama
accountRouter.use((req, res, next) => {
  //Aquí le pasaremos la función que vamos a ejecutar
  console.log(
    "Se ejecuta nuestra función definida en el middleware de account"
  );
  // Continuamos con la siguiente función
  next();
});

//Exportamos el archivo account.js
export default accountRouter;
