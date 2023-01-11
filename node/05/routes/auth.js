// Importamos expres
import express from "express";
// import { USERS_BBDD } from "../bbdd.js";
// importamos la function
import checkEmailPassword from "../utils/check_email_password.js";
const authRouter = express.Router();

// Endpoint público (no autenticado y no autorizado)

// Endpoint autenticado para todo usuario registrado

// Endpoint autorizado a administradores

export default authRouter;

// Endpoint publico (no autenticado y no autorizado)
authRouter.get("/public", (req, res) => res.send("Endpoint público"));
// Simplemente enviamos una respuesta de acceso al enpoint

// Endpoint autenticado para todo usuario registrado
authRouter.post("/autenticado", (req, res) => {
  // obtenemos el email y password del body
  const { email, password } = req.body;
  if (!email || !password) return res.sendStatus(400);
  // const user = USERS_BBDD.find(user => user.email === email);
  // if(!user) return res.sendStatus(401);
  // if(user.password !== password) return res.sendStatus(401);
  // res.send(`Usuario ${user.name} autenticado`)
  try {
    const user = checkEmailPassword(email, password);
    return res.send(`Usuario ${user.name} autenticado`);
  } catch (err) {
    return res.sendStatus(401);
  }
});

authRouter.post("/autorizado", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.sendStatus(400);
  // const user = USERS_BBDD.find(user => user.email === email);
  // if(!user) return res.sendStatus(401);
  // if(user.password !== password) return res.sendStatus(401);
  // if(user.role !== 'admin') return res.sendStatus(403)
  // res.send(`Usuario administrador ${user.name}`)
  try {
    const user = checkEmailPassword(email, password);
    if (user.role !== "admin") return res.sendStatus(403);
    return res.send(`Usuario administrador ${user.name}`);
  } catch (err) {
    return res.sendStatus(401);
  }
});
