const { query } = require("express");
const db = require("../../Config/db");
require("dotenv").config();

module.exports = {
  flight: (data) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO flight SET 
      ('idairlines', (SELECT idairlines FROM airlines WHERE idairlines = ${data.idairlines})),
      ('idfromcity', (SELECT idcity FROM city WHERE idcity = ${data.fromcity})),
      ('idtocity', (SELECT idcity FROM city WHERE idcity = ${data.tocity})),
      code = ?, classflight = ?, typeflight = ?, child = ?, adult = ?, transit = ?,
      direct = ?, moretransit = ?, luggage = ?, meal = ?, wifi = ?, date_departure = ?,
      departure = ?, arrived = ?, price = ?, rating = ?, total_review = ?`,
      [
        data.code, data.classflight, data.typeflight, data.child, data.adult, data.transit,data.direct,
        data.moretransit, data.luggage, data.meal, data.wifi, data.date_departure, data.departure, data.arrived,
        data.price, data.rating, data.totalreview
      ],(err,result) => {
        if(!err){
          resolve(result);
        }else{
          reject(new Error(err));
        }
      })

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
      db.query(`
        SELECT flight.*, a.name_airlines as airlane_name, cf.name_city as from_city,
        ct.name_city as to_city, f_c.name_country as from_country, t_c.name_country as to_country FROM flight
        INNER JOIN airlines as a ON flight.idairlines = a.idairlines
        INNER JOIN city as cf ON flight.idfromcity = cf.idcity
        INNER JOIN city as ct ON flight.idtocity = ct.idcity
        INNER JOIN country as f_c ON cf.idcountry = f_c.idcountry
        INNER JOIN country as t_c ON ct.idcountry = t_c.idcountry
        WHERE flight.idflight = ${id}
      `,(err,result) => {
        if(!err){
          resolve(result);
        }else{
          reject(new Error(err));
        }
      })
    });
  },

  getAll : () => {
    return new Promise((resolve,reject) => {
      db.query(
        `SELECT flight.*, a.name_airlines as airlane_name, cf.name_city as from_city,
        ct.name_city as to_city, f_c.name_country as from_country, t_c.name_country as to_country 
        FROM flight
        INNER JOIN airlines as a ON flight.idairlines = a.idairlines
        INNER JOIN city as cf ON flight.idfromcity = cf.idcity
        INNER JOIN city as ct ON flight.idtocity = ct.idcity
        INNER JOIN country as f_c ON cf.idcountry = f_c.idcountry
        INNER JOIN country as t_c ON ct.idcountry = t_c.idcountry`
      ,(err,result) => {
        if(!err){
          resolve(result);
        }else{
          reject(new Error(err));
        }
      })
    })
  },

  getAllSearch: (
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
      db.query(`
        SELECT flight.*, a.name_airlines as airlane_name, cf.name_city as from_city,
        ct.name_city as to_city, f_c.name_country as from_country, t_c.name_country as to_country 
        FROM flight
        INNER JOIN airlines as a ON flight.idairlines = a.idairlines
        INNER JOIN city as cf ON flight.idfromcity = cf.idcity
        INNER JOIN city as ct ON flight.idtocity = ct.idcity
        INNER JOIN country as f_c ON cf.idcountry = f_c.idcountry
        INNER JOIN country as t_c ON ct.idcountry = t_c.idcountry
        WHERE cf.name_city LIKE '%${fromcity}%' AND ct.name_city LIKE '%${tocity}%'
        AND flight.typeflight LIKE '%${typeflight}%' AND flight.child LIKE '%${child}%'
        AND flight.adult LIKE '%${adult}%' AND flight.classflight LIKE '%${classflight}%'
        AND flight.date_departure LIKE '%${datedeparture}%' AND a.name_airlines LIKE '%${name}%'
        AND flight.luggage LIKE '%${luggage}%' AND  flight.meal LIKE '%${meal}%'
        AND flight.wifi LIKE '%${wifi}%' AND flight.direct LIKE '%${direct}%'
        AND flight.transit LIKE '%${transit}%' AND flight.moretransit LIKE '%${more_transit}%'
        AND flight.departure BETWEEN '${departurefrom}' AND '${departureto}' 
        AND flight.arrived BETWEEN '${arrivedfrom}' AND '${arrivedto}'
        AND flight.price BETWEEN '${pricefrom}' AND '${priceto}'`
        ,(err,result) => {
        if(!err){
          resolve(result);
        }else{
          reject(err);
        }
      })
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
