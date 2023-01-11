import express from "express";
import checkAgeEyeColor from "../utils/check_age_eyeColor.js";
const userRouter = express.Router();
import { USERS_BBDD } from "../bbdd.js";

export default userRouter;

userRouter.get("/:guid", (req, res) => {
  const { guid } = req.params;
  const user = USERS_BBDD.find((user) => user.guid === guid);
  if (!user) return res.status(404).send();
  res.send({ colorOjos: user.eyeColor, Edad: user.age });
});

userRouter.patch("/:guid", (req, res) => {
  const { guid } = req.params;
  // Extraemos el nombre del body
  const { name } = req.body;

  if (!name) return res.status(400);
  const user = USERS_BBDD.find((user) => user.guid === guid);
  if (!user) return res.status(404).send();
  // Añadimos el nombre modificado y enviamos la respuesta
  user.name = name;
  res.send(user);
});
