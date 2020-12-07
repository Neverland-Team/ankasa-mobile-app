const { success, failed, notfound } = require("../../Helper/response");
const airlinesModel = require("../Models/airlinesModel");
const { upload } = require("../../Middleware/Type-File");
const cloudinary = require("../../Helper/cloudinary");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  airlines: async (req, res) => {
    try {
      let body = {};
      if(req.file){
        const image = await cloudinary.uploader.upload(req.file.path);
        body = {...req.body, photo: image.secure_url}
      }else{
        body = {...req.body, photo: "images.png"}
      }
      airlinesModel.airlines(body)
      .then((result) => {
        success(res, result, `Insert data success!`);
      })
      .catch((err) => {
        return res.status(500).send({
          success: false,
          status: 500,
          message: `internal server error ${err.message}`
        })
      });
    } catch (error) {
      return res.status(500).send({
        success: false,
        message: `internal server error : ${error.message}`,
        data: []
      })
    }
  },

  getAllData: (req, res) => {
    try {
      const name = !req.query.name ? "" : req.query.name;
      const sort = !req.query.sort ? "idairlines" : req.query.sort;
      const typesort = !req.query.typesort ? "ASC" : req.query.typesort;

      const limit = !req.query.limit ? 10 : parseInt(req.query.limit);
      const page = !req.query.page ? 1 : parseInt(req.query.page);
      const offset = page <= 1 ? 0 : (page - 1) * limit;

      airlinesModel
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
      airlinesModel
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
      const id = req.params.idairlines;
      airlinesModel
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

  update: async (req, res) => {
    try {
      const id = req.params.idairlines;
      let body = {};
      if(req.file){
        const image = await cloudinary.uploader.upload(req.file.path);
        body = {...req.body, photo: image.secure_url}
      }else{
        const user = await airlinesModel.getId(id);
        body = {...req.body, photo: user[0].photo};
      }
      const updated = await airlinesModel.update(body,id);
      if(updated.affectedRows !== 0){
        return res.status(201).send({
          success: true,
          status: 200,
          message: "successfully updated data"
        })
      }
      return res.status(403).send({
        success: false,
        status: 403,
        message: "update data cannot succesfully"
      })
    } catch (error) {
      failed(res, [], "Internal Server Error");
    }
  },

  delete: (req, res) => {
    try {
      const id = req.params.idairlines;
      airlinesModel
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
