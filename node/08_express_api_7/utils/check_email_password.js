import { USERS_BBDD } from "../bbdd.js";
import userModel from "../services/schemas/user_schema.js";
// Función para validar email y password
const checkEmailPassword = async (email, password) => {
  // Buscamos el email entre las cuentas para buscarlo
  const user = await userModel.findOne(email);
  // Si no existe el usuario lanzamos un error
  if (!user) throw new Error();
  // Si la password no coincide con la recibida lanzamos un error
  if (user.password !== password) throw new Error();
  // Si todo es correcto devolvemos el usuario
  return user;
};

export default checkEmailPassword;
