const { success, failed, notfound } = require("../../Helper/response");
const cityModel = require("../Models/cityModel");
const { upload } = require("../../Middleware/Type-File");
const cloudinary = require("../../Helper/cloudinary");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  city: async (req, res) => {
    try {
        let body = {...req.body};
        body.photo = !req.file ? "images.png" : (await cloudinary.uploader.upload(req.file.path)).secure_url;
        const updated = await cityModel.city(body);
        if(updated.affectedRows != 0){
          return res.status(200).send({
            success: true,
            status: 200,
            message: "insert data successfully"
          })
        }
        return res.status(403).send({
          success: false,
          status: 403,
          message: "insert data cannot successfully"
        })
    } catch (error) {
      failed(res, [], error.me);
    }
  },

  getAll: (req, res) => {
    try {
      cityModel
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
      const id = req.params.idcity;
      cityModel
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
      const { idcity } = req.params;
      const user = await cityModel.getId(idcity);
      if (user.length == 1) {
        const photo = !req.file ? user[0].photocity : (await cloudinary.uploader.upload(req.file.path)).secure_url;
        const data = { ...req.body, photo: photo };
        const updated = await cityModel.update(data, idcity);
        if (updated.affectedRows == 1) {
          return res.status(200).send({
            success: true,
            message: "successfully update data",
            data: updated,
          });
        }
        return res.status(403).send({
          success: false,
          message: "update city cannot succesfully",
          data: updated,
        });
      } else {
        return res.status(404).send({
          success: false,
          message: "user data cannot found",
          data: [],
        });
      }
    } catch (err) {
      return res.status(500).send({
        success: false,
        status: 500,
        message: `internal server error : ${err.message}`,
      });
    }
  },

  delete: (req, res) => {
    try {
      const id = req.params.idcity;
      cityModel
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
