const { success, failed } = require("../../Helper/response");
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
