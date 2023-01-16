import db from "../mysql.js";
import moment from "moment/moment.js";
import md5 from "md5";
import utils from "../../utils/utils.js";
const userQueris = {};

userQueris.getUserByEmail = async (email) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM usuario WHERE email = ?",
      email,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end);
  }
};

userQueris.addUser = async (userData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      nombre: userData.nombre,
      apellidos: userData.apellidos,
      email: userData.email,
      password: md5(userData.password),
      tsAlta: moment().format("YYYY-MM-DD HH:mm:ss"),
      role: userData.role,
    };
    return await db.query("INSERT INTO usuario SET ?", userObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end);
  }
};

userQueris.deleteUser = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "DELETE FROM usuario WHERE id =?",
      id,
      "delete",
      conn
    );
  } catch {
    throw new Error(e);
  } finally {
    conn && (await conn.end);
  }
};

userQueris.getUserById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM usuario WHERE id = ?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end);
  }
};

// Modificar un usuario por su id
userQueris.updateUser = async (id, userData) => {
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos que nos puede llegar del usuario a modificar en la base de datos.
    // Encriptamos la password con md5 si nos llega por el body, sino la declaramos como undefined
    // y usamos la libreria momentjs para actualizar la fecha.
    let userObj = {
      nombre: userData.nombre,
      apellidos: userData.apellidos,
      email: userData.email,
      password: userData.password ? md5(userData.password) : undefined,
      // update_date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    // Eliminamos los campos que no se van a modificar (no llegan por el body)
    userObj = await utils.removeUndefinedKeys(userObj);

    return await db.query(
      "UPDATE usuario SET ? WHERE id = ?",
      [userObj, id],
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default userQueris;
