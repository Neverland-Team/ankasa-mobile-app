const { success, failed, notfound } = require("../../Helper/response");
const countryModel = require("../Models/countryModel");

module.exports = {
  country: (req, res) => {
    try {
      const body = req.body;
      if (body.namecountry === "") {
        failed(res, [], "Data must have a value");
      } else {
        countryModel
          .country(body)
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

  getAllData: (req, res) => {
    try {
      const name = !req.query.name ? "" : req.query.name;
      const sort = !req.query.sort ? "idcountry" : req.query.sort;
      const typesort = !req.query.typesort ? "ASC" : req.query.typesort;

      const limit = !req.query.limit ? 10 : parseInt(req.query.limit);
      const page = !req.query.page ? 1 : parseInt(req.query.page);
      const offset = page <= 1 ? 0 : (page - 1) * limit;

      countryModel
        .getAllData(name, sort, typesort, limit, offset)
        .then((result) => {
          if (result.length === 0) {
            notfound(res, [], "Data empty");
          } else {
            const totalRows = result[0].count;
            const count = {
              total: totalRows,
              totalPage: Math.ceil(totalRows / limit),
              page: page,
            };
            success(res, result, count, "Get all data success");
          }
        })
        .catch((err) => {
          failed(res, [], err.message);
        });
    } catch (error) {
      failed(res, [], "Error Internal Server");
    }
  },

  getAll: (req, res) => {
    try {
      countryModel
        .getAll()
        .then((result) => {
          if (result.length === 0) {
            notfound(res, [], "Data empty");
          } else {
            success(res, result, "Get all data success");
          }
        })
        .catch((err) => {
          failed(res, [], err.message);
        });
    } catch (error) {
      failed(res, [], "Error Internal Server");
    }
  },

  getId: (req, res) => {
    try {
      const id = req.params.idcountry;
      countryModel
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
      const id = req.params.idcountry;
      const body = req.body;
      countryModel
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
      const id = req.params.idcountry;
      countryModel
        .delete(id)
        .then((result) => {
          if (result.affectedRows === 0) {
            failed(res, [], "Data not found for delete");
          } else {
            success(res, result, `ID ${id} success deleted!`);
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
