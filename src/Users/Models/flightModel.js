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

  // getId: (id) => {
  //   return new Promise((resolve, reject) => {
  //     db.query(`SELECT * FROM flight WHERE idflight='${id}'`, (err, result) => {
  //       if (err) {
  //         reject(new Error(err));
  //       } else {
  //         resolve(result);
  //       }
  //     });
  //   });
  // },

  getId: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT idflight,airlines.idairlines,name_airlines,
      airlines.photo as photoairlines, fromcity.idcity,
      fromcity.name_city as formcity, fromcountry.idcountry, fromcountry.name_country as fromcountry,
      tocity.idcity, tocity.name_city as toname_city, tocountry.idcountry,
      tocountry.name_country as tocountry,code,classflight,typeflight,child,
      adult,transit,direct,more_transit,luggage,meal,wifi,date_departure,
      departure,arrived,price,rating,total_review,
      flight.createdAt FROM (((((flight INNER JOIN airlines ON flight.idairlines=airlines.idairlines)
      INNER join city as fromcity on flight.idfromcity=fromcity.idcity)
      INNER JOIN country as fromcountry ON fromcity.idcity=fromcountry.idcountry)
      INNER JOIN city as tocity on flight.idtocity=tocity.idcity)
      INNER JOIN country as tocountry on tocity.idcity=tocountry.idcountry) WHERE idflight=${id}`,
        (err, result) => {
          // console.log(id);
          if (err) {
            reject(new Error(err));
          } else {
            resolve(result);
          }
        }
      );
    });
  },

  getAll: (
    fromcity,
    tocity,
    typeflight,
    child,
    adult,
    classflight,
    datedeparture,
    name,
    luggage,
    meal,
    wifi,
    direct,
    transit,
    more_transit,
    departurefrom,
    departureto,
    arrivedfrom,
    arrivedto,
    pricefrom,
    priceto
  ) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT idflight,airlines.idairlines,name_airlines,
      airlines.photo as photoairlines, fromcity.idcity,
      fromcity.name_city as fromname_city, fromcountry.idcountry, fromcountry.name_country as fromcountry,
      tocity.idcity, tocity.name_city as toname_city, tocountry.idcountry,
      tocountry.name_country as tocountry,code,classflight,typeflight,child,
      adult,transit,direct,more_transit,luggage,meal,wifi,date_departure,
      departure,arrived,price,rating,total_review,
      flight.createdAt FROM (((((flight INNER JOIN airlines ON flight.idairlines=airlines.idairlines)
      INNER join city as fromcity on flight.idfromcity=fromcity.idcity)
      INNER JOIN country as fromcountry ON fromcity.idcity=fromcountry.idcountry)
      INNER JOIN city as tocity on flight.idtocity=tocity.idcity)
      INNER JOIN country as tocountry on tocity.idcity=tocountry.idcountry)
      WHERE fromcity.name_city LIKE '%${fromcity}%' AND tocity.name_city LIKE '%${tocity}%'
      AND typeflight LIKE '%${typeflight}%' AND child LIKE '%${child}%' AND adult LIKE '%${adult}%'
      AND classflight LIKE '%${classflight}%' AND date_departure LIKE '%${datedeparture}%'
      AND name_airlines LIKE '%${name}%' AND luggage LIKE '%${luggage}%' AND meal LIKE '%${meal}%'
      AND wifi LIKE '%${wifi}%' AND direct LIKE '%${direct}%' AND transit  LIKE '%${transit}%'
      AND more_transit  LIKE '%${more_transit}%' AND departure BETWEEN '${departurefrom}'
      AND '${departureto}' AND arrived BETWEEN '${arrivedfrom}' AND '${arrivedto}'
      AND price BETWEEN '${pricefrom}' AND '${priceto}'`,
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
