const db = require("../../Config/db");
require("dotenv").config();

module.exports = {
  booking: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO booking (iduser, idflight, title, fullName, nationality, insurance, payment_status, terminal, gate, total) VALUES ('${data.iduser}', '${data.idflight}','${data.title}','${data.fullName}','${data.nationality}','${data.insurance}','${data.payment_status}','${data.terminal}','${data.gate}','${data.total}')`,
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

  // getAllData: () => {
  //   return new Promise((resolve, reject) => {
  //     db.query(
  //       `SELECT idbooking, users.iduser, email,phone, username, city, address, code, users.photo as photousers, flight.idflight,airlines.idairlines,name_airlines,
  //           airlines.photo as photoairlines, fromcity.idcity,
  //           fromcity.name_city as fromnamecity, fromcountry.idcountry, fromcountry.name_country as fromcountry,
  //           tocity.idcity, tocity.name_city as tonamecity, tocountry.idcountry,
  //           tocountry.name_country as tocountry,code,classflight,typeflight,child,
  //           adult,transit,direct,more_transit,luggage,meal,wifi,date_departure,
  //           departure,arrived,price,rating,total_review, title, fullName, nationality, insurance, payment_status, terminal, gate, total, booking.createdAt FROM (((((((booking INNER JOIN users ON booking.iduser= users.iduser) INNER JOIN flight ON booking.idflight=flight.idflight) INNER JOIN airlines ON flight.idairlines=airlines.idairlines)
  //           INNER JOIN city as fromcity on flight.idfromcity=fromcity.idcity)
  //           INNER JOIN country as fromcountry ON fromcity.idcity=fromcountry.idcountry)
  //           INNER JOIN city as tocity on flight.idtocity=tocity.idcity)
  //           INNER JOIN country as tocountry on tocity.idcity=tocountry.idcountry)`,
  //       (err, result) => {
  //         if (err) {
  //           reject(new Error(err));
  //         } else {
  //           resolve(result);
  //         }
  //       }
  //     );
  //   });
  // },

  // getId: (id) => {
  //   return new Promise((resolve, reject) => {
  //     db.query(
  //       `SELECT idbooking, users.iduser, email, phone, username, city, address, code, users.photo as photousers, flight.idflight, airlines.idairlines,name_airlines,
  //           airlines.photo as photoairlines, fromcity.idcity,
  //           fromcity.name_city as fromnamecity, fromcountry.idcountry, fromcountry.name_country as fromcountry,
  //           tocity.idcity, tocity.name_city as tonamecity, tocountry.idcountry,
  //           tocountry.name_country as tocountry,code,classflight,typeflight,child,
  //           adult,transit,direct,more_transit,luggage,meal,wifi,DATE_FORMAT(date_departure, "%W, %e %M %Y") as date_departure, TIME_FORMAT(departure, "%h:%i %p") as departure,arrived,price,rating,total_review, title, fullName, nationality, insurance, payment_status, terminal, gate, total FROM (((((((booking INNER JOIN users ON booking.iduser= users.iduser) INNER JOIN flight ON booking.idflight=flight.idflight) INNER JOIN airlines ON flight.idairlines=airlines.idairlines)
  //           INNER JOIN city as fromcity on flight.idfromcity=fromcity.idcity)
  //           INNER JOIN country as fromcountry ON fromcity.idcity=fromcountry.idcountry)
  //           INNER JOIN city as tocity on flight.idtocity=tocity.idcity)
  //           INNER JOIN country as tocountry on tocity.idcity=tocountry.idcountry)
  //           WHERE booking.idbooking='${id}'`,
  //       (err, result) => {
  //         console.log(id);
  //         if (err) {
  //           reject(new Error(err));
  //         } else {
  //           resolve(result);
  //         }
  //       }
  //     );
  //   });
  // },

  // userbooking: (iduser) => {
  //   return new Promise((resolve, reject) => {
  //     db.query(
  //       `SELECT idbooking, users.iduser, email,phone, username, city, address, post_code, users.photo as photousers, flight.idflight,airlines.idairlines,name_airlines,
  //           airlines.photo as photoairlines, fromcity.idcity,
  //           fromcity.name_city as fromnamecity, fromcountry.idcountry, fromcountry.name_country as fromcountry,
  //           tocity.idcity, tocity.name_city as tonamecity, tocountry.idcountry,
  //           tocountry.name_country as tocountry,code,classflight,typeflight,child,
  //           adult,transit,direct,more_transit,luggage,meal,wifi,date_departure,
  //           departure,arrived,price,rating,total_review, title, fullName, nationality, insurance, payment_status, terminal, gate, total, booking.createdAt FROM (((((((booking INNER JOIN users ON booking.iduser= users.iduser) INNER JOIN flight ON booking.idflight=flight.idflight) INNER JOIN airlines ON flight.idairlines=airlines.idairlines)
  //           INNER JOIN city as fromcity on flight.idfromcity=fromcity.idcity)
  //           INNER JOIN country as fromcountry ON fromcity.idcity=fromcountry.idcountry)
  //           INNER JOIN city as tocity on flight.idtocity=tocity.idcity)
  //           INNER JOIN country as tocountry on tocity.idcity=tocountry.idcountry)
  //           WHERE users.iduser=${iduser}`,
  //       (err, result) => {
  //         if (err) {
  //           reject(new Error(err));
  //         } else {
  //           resolve(result);
  //         }
  //       }
  //     );
  //   });
  // },

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
