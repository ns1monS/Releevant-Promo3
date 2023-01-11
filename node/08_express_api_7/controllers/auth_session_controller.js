import { nanoid } from "nanoid";
import { USERS_BBDD } from "../bbdd.js";
import checkEmailPassword from "../utils/check_email_password.js";
import userModel from "../services/schemas/user_schema.js";

const controller = {};

controller.authUser = async (req, res) => {
  // Obtenemos el email y password del body
  const { email, password } = req.body;
  // Si no existe alguno de esos dos campos devolvemos y 400(bad request)
  if (!email || !password) return res.sendStatus(400);

  try {
    // Validamos el email y password y obtenemos el guid para asociarlo con la sesión
    const { guid } = checkEmailPassword(email, password);
    // Generamos un identificador con la libreria nanoid
    const sessionId = nanoid();
    // Añadimos el sessionId y el guid del uusuario al array
    sessions.push({ sessionId, guid });
    // Escribimos en la cookie el sessionId con la opción httpOnly
    res.cookie("sessionId", sessionId, { httpOnly: true });
    //Si todo es correcto enviamos la respuesta. 200 OK
    return res.send();
  } catch (err) {
    // Si el usuario no existe enviamos un 401 (unauthorized)
    return res.sendStatus(401);
  }
};

controller.listUser = async (req, res) => {
  // obtenemos la cookie que recibimos
  const { cookies } = req;
  // Si la cookie no existe enviamos un 401 (unauthorized)
  if (!cookies.sessionId) return res.sendStatus(401);
  // Buscamos la sesión recibida en el array de sesiones
  const userSession = sessions.find(
    (session) => session.sessionId === cookies.sessionId
  );
  // Si no existe enviamos un 401 (unauthorized)
  if (!userSession) return res.sendStatus(401);
  // Obtenemos los datos del usuario a través de guid
  // const user = USERS_BBDD .find(user => user.guid === userSession.guid);

  const user = userModel.findById(guid);

  // Si no obtenemos usuario enviamos un  401 (unauthorized)
  if (!user) return res.sendStatus(401);
  // Borramos la password del objeto obtenido para no mostrarla
  delete user.password;
  // Y devolvemos los datos del usuario
  return res.send(user);
};

export default controller;
