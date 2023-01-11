import mysql from "mysql2";
import moment from "moment/moment.js";
import md5 from "md5";

let db = {};
// Create connection
db.createConnection = async () => {
  return new Promise((resolve, reject) => {
    try {
      const mysqlConnection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        dateStrings: true,
      });
      mysqlConnection.connect(async function (err) {
        if (err) {
          reject(new Error(err.message));
        }
        resolve(mysqlConnection);
      });
    } catch (error) {
      reject(new Error(error.message));
    }
  });
};

export default db;
