const { success, failed, notfound } = require("../../Helper/response");
const flightModel = require("../Models/flightModel");

module.exports = {
  flight: (req, res) => {
    try {
      const body = req.body;
      if (body.name_flight === "") {
        failed(res, [], "Data must have a value");
      } else {
        flightModel
          .flight(body)
          .then((result) => {
            success(res, result, `Insert data success!`);
          })
          .catch((err) => {
            failed(res, [], err.message);
          });
      }
    } catch (error) {
      failed(res, [], "Internal Server Error");
    }
  },

  getId: (req, res) => {
    try {
      const id = req.params.idflight;
      flightModel
        .getId(id)
        .then((result) => {
          if (result.length === 0) {
            notfound(res, [], "Data not found!");
          } else {
            success(res, result, `Get by Id: ${id} success`);
          }
        })
        .catch((err) => {
          failed(res, [], err.message);
        });
    } catch (error) {
      failed(res, [], "Internal Server Error");
    }
  },
  getAllSearch: (req, res) => {
    try {
      const date = req.query.datedeparture;
      const tocity = req.query.tocity;
      // console.log(date, tocity);
      flightModel
        .getAllSearchToo(date, tocity)
        .then((result) => {
          if (result.length === 0) {
            notfound(res, [], "Data not found!");
          } else {
            success(res, result, `Get by search dung success`);
          }
        })
        .catch((err) => {
          failed(res, [], err.message);
        });
    } catch (error) {
      failed(res, [], "Internal Server Error");
    }
  },

  getAll: (req, res) => {
    try {
      const fromcity = !req.query.fromcity ? "" : req.query.fromcity;
      const tocity = !req.query.tocity ? "" : req.query.tocity;
      const typeflight = !req.query.typeflight ? "" : req.query.typeflight;
      const child = !req.query.child ? "" : req.query.child;
      const adult = !req.query.adult ? "" : req.query.adult;
      const classflight = !req.query.classflight ? "" : req.query.classflight;
      const datedeparture = !req.query.datedeparture
        ? ""
        : req.query.datedeparture;

      const name = !req.query.name ? "" : req.query.name;
      const luggage = !req.query.luggage ? "" : req.query.luggage;
      const meal = !req.query.meal ? "" : req.query.meal;
      const wifi = !req.query.wifi ? "" : req.query.wifi;
      const direct = !req.query.direct ? "" : req.query.direct;
      const transit = !req.query.transit ? "" : req.query.transit;
      const more_transit = !req.query.more_transit
        ? ""
        : req.query.more_transit;

      const departurefrom = !req.query.departurefrom
        ? "00:00:00"
        : req.query.departurefrom;
      const departureto = !req.query.departureto
        ? "24:00:00"
        : req.query.departureto;

      const arrivedfrom = !req.query.arrivedfrom
        ? "00:00:00"
        : req.query.arrivedfrom;
      const arrivedto = !req.query.arrivedto ? "24:00:00" : req.query.arrivedto;

      const pricefrom = !req.query.pricefrom ? "0" : req.query.pricefrom;
      const priceto = !req.query.priceto ? "99999999999" : req.query.priceto;

      if (req.query) {
        flightModel
          .getAllSearch(
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
          )
          .then((result) => {
            if (result.length === 0) {
              notfound(res, [], "Data empty");
            } else {
              success(res, result, "Get all data success!");
            }
          })
          .catch((err) => {
            failed(res, [], err.message);
          });
      } else {
        flightModel
          .getAll()
          .then((result) => {
            if (result.length === 0) {
              notfound(res, [], "Data empty");
            } else {
              success(res, result, "Get all data success!");
            }
          })
          .catch((err) => {
            failed(res, [], err.message);
          });
      }
    } catch (error) {
      failed(res, [], "Error Internal Server");
    }
  },

  update: (req, res) => {
    try {
      const id = req.params.idflight;
      const body = req.body;
      flightModel
        .update(body, id)
        .then((result) => {
          if (result.affectedRows === 0) {
            failed(res, [], "Data not found for update");
          } else {
            success(res, result, `ID ${id} success updated!`);
          }
        })
        .catch((err) => {
          failed(res, [], err.message);
        });
    } catch (error) {
      failed(res, [], "Internal Server Error");
    }
  },

  delete: (req, res) => {
    try {
      const id = req.params.idflight;
      flightModel
        .delete(id)
        .then((result) => {
          if (result.affectedRows === 0) {
            failed(res, [], "Data not found for delete");
          } else {
            success(res, result, `Id ${id} success deleted!`);
          }
        })
        .catch((err) => {
          failed(res, [], err.message);
        });
    } catch (error) {
      failed(res, [], "Internal Server Error");
    }
  },
};
