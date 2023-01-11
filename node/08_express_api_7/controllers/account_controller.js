import { USERS_BBDD } from "../bbdd.js";
import userModel from "../services/schemas/user_schema.js";
const controller = {};

controller.listUser = async (req, res) => {
  // Buscamos los detalles de la cuenta a través del guid recibido por req.params
  const { guid } = req.params;
  const user = await userModel.findById(guid);
  // Si no existe el usuario respondemos con un 404 (not found)
  if (!user) return res.status(404).send();
  // Si existe respondemos con los detalles de la cuenta
  res.send(user);
};

controller.addUser = async (req, res) => {
  // Extraemos el guid y nombre del body. Obligamos que estén los dos campos para crear un usuario

  const { guid, name, email, password, role, address } = req.body;
  // Si no existe guid o name recibidos por el body devolvemos un 400 (bad request)
  if (!guid || !name) return res.status(400).send();

  const user = await userModel.findById(guid);

  // Buscamos los detalles de la cuenta a través del guid recibido por req.params
  //   const user = USERS_BBDD.find((user) => user.guid === guid);
  // Si existe el usuario respondemos con un 409 (conflict),
  // ya que no se puede crear una cuenta nueva con el mismo guid
  if (user) return res.status(409).send();
  // Creamos un objeto nuevo con los datos recibidos con el método push
  //   USERS_BBDD.push({
  //     guid,
  //     name,
  //   });

  const newUser = new userModel({
    _id: guid,
    name,
    email,
    password,
    role,
    address,
  });
  await newUser.save();

  // Enviamos una respuesta
  res.send();
};

controller.updateUser = async (req, res) => {
  // Extraemos el guid de req.params
  const { guid } = req.params;
  // Extraemos el nombre del body
  const { name } = req.body;
  // Si no existe name devolvemos un 400 (bad request)
  if (!name) return res.status(400);
  // Buscamos los detalles de la cuenta a través del guid recibido por req.params
  //   const user = USERS_BBDD.find((user) => user.guid === guid);

  const user = await userModel.findById(guid);
  // Si no existe el usuario respondemos con un 404 (not found)
  if (!user) return res.status(404).send();
  // Añadimos el nombre modificado y enviamos la respuesta
  user.name = name;
  await user.save();

  res.send(user);
};

controller.deleteUser = async (req, res) => {
  // Buscamos los detalles de la cuenta a través del guid recibido por req.params
  const { guid } = req.params;
  const user = await userModel.findById(guid);

  // Si no encuentra el guid (retorna -1 si no existe) respondemos con un 404 (not found)
  if (userIndex === -1) return res.status(404).send();
  // Eliminamos el índice de ese usuario del array
  await user.remove();
  // Enviamos simplemente una respuesta
  res.send();
};
export default controller;
