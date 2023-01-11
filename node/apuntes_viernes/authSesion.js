// importamos express y la función para validar email y password
import express from "express";
import checkEmailPassword from "../utils/check_email_password";

const authSessionRouter = express.Router();

authSessionRouter.post("/login", (req, res) => {
  // Obtenemos el email y password del body
  const { email, password } = req.body;
  // Si no existe alguno de esos dos campos devolvemos y 400(bad request)
  if (!email || !password) return res.sendStatus(400);

  try {
    // Llamamos a la función de validar el email y password
    const user = checkEmailPassword(email, password);
    //Si todo es correcto enviamos la respuesta. 200 OK
    return res.send(`Usuario ${user.name} autenticado`);
  } catch (err) {
    // Si el usuario no existe enviamos un 401 (unauthorized)
    return res.sendStatus(401);
  }

  // Solicitud autenticada con sesión para obtener el perfil del usuario
});

export default authSessionRouter;
