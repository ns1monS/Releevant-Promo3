import dao from "../services/dao.js";
import md5 from "md5";
import { SignJWT, jwtVerify } from "jose";

const controller = {};

controller.addUser = async (req, res) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password)
    return res.status(400).send("Error al recibir el body");

  try {
    const user = await dao.getUserByEmail(email);
    if (user.length > 0)
      return res.status(409).send("El usuario ya esta registrado");

    const addUser = await dao.addUser(req.body);
    if (addUser) return res.sendStatus(200);
  } catch (e) {
    console.log(e.message);
  }
};

controller.loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Si no alguno de estos campos recibidos por el body devolvemos un 400 (bad request)
  if (!email || !password)
    return res.status(400).send("Error al recibir el body");

  try {
    let user = await dao.getUserByEmail(email);
    // Si no existe el usuario respondemos con un 404 (not found)
    if (user.length <= 0) return res.status(404).send("usuario no registrado");
    // Pasamos md5 a la paswword recibida del cliente
    const clienPassword = md5(password);
    // Como la consulta a la base de datos nos devuelve un array con el objeto del usuario usamos la desestructuración.
    [user] = user;
    // Si existe el usuario, comprobamos que la password es correcta. Si no lo es devolvemos un 401 (unathorized)
    if (user.password != clienPassword)
      return res.status(401).send("password incorrecta");
    // Si es correcta generamos el token y lo devolvemos al cliente
    // Construimos el JWT con el id, email y rol del usuario
    const jwtConstructor = new SignJWT({
      id: user.id,
      email,
      role: user.role,
    });

    // Codificamos el la clave secreta definida en la variable de entorno por requisito de la librería jose
    // y poder pasarla en el formato correcto (uint8Array) en el método .sign
    const encoder = new TextEncoder();
    // Generamos el JWT. Lo hacemos asíncrono, ya que nos devuelve una promesa.
    // Le indicamos la cabecera, la creación, la expiración y la firma (clave secreta).
    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(process.env.JWT_SECRET));
    //Si todo es correcto enviamos la respuesta. 200 OK
    return res.send({ jwt });
  } catch (e) {
    console.log(e.message);
  }
};

// Controlador para eliminar un usuario por su id
controller.deleteUser = async (req, res) => {
  // OBTENER CABECERA Y COMPROBAR SU AUTENTICIDAD Y CADUCIDAD
  const { authorization } = req.headers;
  // Si no existe el token enviamos un 401 (unauthorized)
  if (!authorization) return res.sendStatus(401);
  const token = authorization.split(" ")[1];

  try {
    // codificamos la clave secreta
    const encoder = new TextEncoder();
    // verificamos el token con la función jwtVerify. Le pasamos el token y la clave secreta codificada
    const { payload } = await jwtVerify(
      token,
      encoder.encode(process.env.JWT_SECRET)
    );
    // Verificamos que seamos usuario administrador
    if (!payload.role)
      return res.status(409).send("no tiene permiso de administrador");
    // Buscamos si el id del usuario existe en la base de datos
    const user = await dao.getUserById(req.params.id);
    // Si no existe devolvemos un 404 (not found)
    if (user.length <= 0) return res.status(404).send("el usuario no existe");
    // Si existe, eliminamos el usuario por el id
    await dao.deleteUser(req.params.id);
    // Devolvemos la respuesta
    return res.send(`Usuario con id ${req.params.id} eliminado`);
  } catch (e) {
    console.log(e.message);
  }
};

// Controlador para modificar un usuario por su id
controller.updateUser = async (req, res) => {
  const { authorization } = req.headers;
  // Si no existe el token enviamos un 401 (unauthorized)
  if (!authorization) return res.sendStatus(401);

  try {
    // Si no nos llega ningún campo por el body devolvemos un 400 (bad request)
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("Error al recibir el body");
    // Actualizamos el usuario
    await dao.updateUser(req.params.id, req.body);
    // Devolvemos la respuesta
    return res.send(`Usuario con id ${req.params.id} modificado`);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
