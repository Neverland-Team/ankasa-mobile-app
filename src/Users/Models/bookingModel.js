const db = require("../../Config/db");
require("dotenv").config();

module.exports = {
  booking: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO booking (iduser, idflight, title, fullName, nationality, insurance, paymentStatus, terminal, gate, total) VALUES ('${data.iduser}', '${data.idflight}','${data.title}','${data.fullName}','${data.nationality}','${data.insurance}','${data.payment_status}','${data.terminal}','${data.gate}','${data.total}')`,
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

  getAllData: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT booking.*, ct.name_city as to_city, 
        cf.name_city as from_city, a.name_airlines, 
        c_f.name_country as from_country, c_t.name_country as to_country,
        u.email as user_email, u.username as user_name, u.phone as user_phone,
        u.city as user_city, u.address as user_address, u.post_code as user_post_code,
        u.photo as user_photo FROM booking
        INNER JOIN users as u ON u.iduser = booking.iduser
        INNER JOIN flight as f ON f.idflight = booking.idflight 
        INNER JOIN airlines as a ON f.idairlines = a.idairlines
        INNER JOIN city as cf ON f.idfromcity = cf.idcity
        INNER JOIN city as ct ON f.idtocity = ct.idcity
        INNER JOIN country as c_f ON cf.idcountry = c_f.idcountry
        INNER JOIN country as c_t ON ct.idcountry = c_t.idcountry`,
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
        `SELECT booking.*, ct.name_city as to_city, 
        cf.name_city as from_city, a.name_airlines, 
        c_f.name_country as from_country, c_t.name_country as to_country,
        u.email as user_email, u.username as user_name, u.phone as user_phone,
        u.city as user_city, u.address as user_address, u.post_code as user_post_code,
        u.photo as user_photo FROM booking
        INNER JOIN users as u ON u.iduser = booking.iduser
        INNER JOIN flight as f ON f.idflight = booking.idflight 
        INNER JOIN airlines as a ON f.idairlines = a.idairlines
        INNER JOIN city as cf ON f.idfromcity = cf.idcity
        INNER JOIN city as ct ON f.idtocity = ct.idcity
        INNER JOIN country as c_f ON cf.idcountry = c_f.idcountry
        INNER JOIN country as c_t ON ct.idcountry = c_t.idcountry
        WHERE booking.idbooking = ${id}
      `,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },

  userbooking: (iduser) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT booking.*, ct.name_city as to_city, 
        cf.name_city as from_city, a.name_airlines, 
        c_f.name_country as from_country, c_t.name_country as to_country,
        u.email as user_email, u.username as user_name, u.phone as user_phone,
        u.city as user_city, u.address as user_address, u.post_code as user_post_code,
        u.photo as user_photo FROM booking
        INNER JOIN users as u ON u.iduser = booking.iduser
        INNER JOIN flight as f ON f.idflight = booking.idflight 
        INNER JOIN airlines as a ON f.idairlines = a.idairlines
        INNER JOIN city as cf ON f.idfromcity = cf.idcity
        INNER JOIN city as ct ON f.idtocity = ct.idcity
        INNER JOIN country as c_f ON cf.idcountry = c_f.idcountry
        INNER JOIN country as c_t ON ct.idcountry = c_t.idcountry
        WHERE booking.iduser = ${iduser}`,
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
        `UPDATE booking SET ? WHERE idbooking = ?`,
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
      db.query(`DELETE FROM booking WHERE idbooking='${id}'`, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },
};
