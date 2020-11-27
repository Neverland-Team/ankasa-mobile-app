const db = require("../../Config/db");
require("dotenv").config();

module.exports = {
  flight: (data) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO flight SET ?`, data, (err, result) => {
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
      db.query(`SELECT * FROM flight WHERE idflight='${id}'`, (err, result) => {
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
        `UPDATE flight SET ? WHERE idflight = ?`,
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
      db.query(`DELETE FROM flight WHERE idflight='${id}'`, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },
};
