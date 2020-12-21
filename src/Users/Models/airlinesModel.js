const db = require("../../Config/db");
require("dotenv").config();

module.exports = {
  airlines: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO airlines ( name_airlines, photo) VALUES ('${data.name_airlines}','${data.photo}')`,
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

  getAllData: (name, sort, typesort, limit, offset) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT *, (SELECT COUNT(*) FROM airlines) as count FROM airlines WHERE name_airlines LIKE '%${name}%' ORDER BY ${sort} ${typesort} LIMIT ${limit} OFFSET ${offset} `;
      db.query(query, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },

  getAll: () => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM airlines`;
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
      db.query(
        `SELECT * FROM airlines WHERE idairlines=${id}`,
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

  update: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE airlines SET ? WHERE idairlines = ?`,
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
      db.query(
        `DELETE FROM airlines WHERE idairlines='${id}'`,
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
};
