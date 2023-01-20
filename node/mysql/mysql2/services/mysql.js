import mysql from "mysql2";

let db = {};

db.createConnection = async () => {
  return new Promise((resolve, reject) => {
    try {
      const mysqlConnection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      });
      mysqlConnection.connect(async function (err) {
        if (err) {
          reject(new Error(err.message));
        }
        console.log("ok");
        resolve(mysqlConnection);
      });
    } catch (error) {
      reject(new Error(error.message));
    }
  });
};

db.query = async (sqlQuery, params, type, conn) => {
  return new Promise((resolve, reject) => {
    try {
      conn.query(sqlQuery, params, async (err, result) => {
        if (!err) {
          switch (type) {
            case "select":
              resolve(JSON.parse(JSON.stringify(result)));
              break;
            case "insert":
              resolve(parseInt(result.insertId));
              break;
            case "update":
            case "replace":
            case "delete":
              resolve(true);
              break;
            default:
              throw new Error("Query type not match");
          }
        } else {
          console.log("Query or databases error:", err);
          reject(new Error(err.message));
        }
      });
    } catch (error) {
      reject(new Error(error.message));
    }
  });
};

export default db;
