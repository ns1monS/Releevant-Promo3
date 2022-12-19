import express from "express";
import dotenv from "dotenv";
import { USERS_BBDD } from "./bbdd.js";
import logger from "morgan";
dotenv.config();
const PORT = process.env.PORT;

const expressApp = express();

expressApp.get("/account/:guid", (req, res) => {
  // Buscamos los detalles de la cuenta a través del guid recibido por req.params
  const user = USERS_BBDD.find((user) => user.guid === req.params.guid);
  // Si no existe el usuario respondemos con un 404 (not found)
  if (!user) return res.status(404).send();
  // Si existe respondemos con los detalles de la cuenta
  res.send(user);
});
expressApp.patch("/account/:guid", (req, res) => {
  // Buscamos los detalles de la cuenta a través del guid recibido por req.params
  const { guid } = req.params;
  const user = USERS_BBDD.find((user) => user.guid === guid);
  // Si no existe el usuario respondemos con un 404 (not found)
  if (!user) return res.status(404).send();
});
expressApp.delete("/account/:guid", (req, res) => {
  // Buscamos los detalles de la cuenta a través del guid recibido por req.params
  const { guid } = req.params;
  const user = USERS_BBDD.find((user) => user.guid === guid);
  // Si no existe el usuario respondemos con un 404 (not found)
  if (!user) return res.status(404).send();
});

expressApp.post("/account", (req, res) => {});

expressApp.use(express.json());
expressApp.use(express.text());
expressApp.use(logger("dev"));

expressApp.listen(PORT, () => console.log(`Server in port ${PORT}`));
