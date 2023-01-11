import userQueries from "../mysql_queries/user_queries.js";

const dao = {};

// Buscar un usuario por el email
dao.getUser = async (email) => await userQueries.getUser(email);
// Añadir un nuevo usuario
dao.addUser = async (userData) => await userQueries.addUser(userData);

// Buscar un usuario por el id
dao.getUserbyId = async (id) => await userQueries.getUserbyId(id);

// Eliminar un usuario
dao.deleteUser = async (id) => await userQueries.deleteUser(id);
// Modificar usuario por su id
dao.updateUser = async (id, userData) =>
  await userQueries.updateUser(id, userData);

export default dao;
