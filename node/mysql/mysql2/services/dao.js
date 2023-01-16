import userQueris from "./mysql_queris/user_queris.js";

const dao = {};

dao.getUserByEmail = async (email) => await userQueris.getUserByEmail(email);

dao.addUser = async (userData) => await userQueris.addUser(userData);

dao.getUserById = async (id) => await userQueris.getUserById(id);

dao.deleteUser = async (id) => await userQueris.deleteUser(id);

dao.updateUser = async (id, userData) =>
  await userQueris.updateUser(id, userData);

export default dao;
