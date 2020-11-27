const db = require("../../Config/db");
require("dotenv").config();

module.exports = {
  city: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO city ( name_city, photo) VALUES ('${data.name_city}','${data.photo}')`,
        (err, result) => {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(result);
          }
        }
      );
    });
  },

  getAll: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM city`;
      db.query(query, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },

  getId: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM city WHERE idcity='${id}'`, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },

  update: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE city SET ? WHERE idcity = ?`,
        [data, id],
        (err, result) => {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(result);
          }
        }
      );
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM city WHERE idcity='${id}'`, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },
};
