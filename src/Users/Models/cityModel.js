const db = require("../../Config/db");
require("dotenv").config();

module.exports = {
  city: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO city (idcountry, name_city, photo) VALUES ('${data.idcountry}', '${data.name_city}','${data.photo}')`,
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
      db.query(
        `SELECT idcity, country.idcountry,name_city, name_country, photo as photocity,city.createdAt FROM city INNER JOIN country ON city.idcountry=country.idcountry`,
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
  search: (req) => {
    return new Promise((resolve, reject) => {
     const query = req.params.search;
      db.query(
        `SELECT idcity, country.idcountry,name_city, name_country, photo as photocity,city.createdAt FROM city INNER JOIN country ON city.idcountry=country.idcountry WHERE name_city LIKE '%${query}%'`,
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

  getId: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT idcity, country.idcountry,name_city, name_country, photo as photocity,city.createdAt FROM city INNER JOIN country ON city.idcountry=country.idcountry WHERE idcity='${id}'`,
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
