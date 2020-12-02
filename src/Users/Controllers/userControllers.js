const { findAndUpdateById } = require("../Models/userModel");
const userModel = require("../Models/userModel");
const cloudinary = require("../../Helper/cloudinary");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      let { limit, page } = req.query;
      if (!limit) limit = 5;
      else limit = parseInt(limit);
      if (!page) page = 1;
      else page = parseInt(page);
      const users = await userModel.findAllUser(limit, page);
      return res.status(200).send({
        success: true,
        status: 200,
        message: "success fetch users data",
        data: users,
      });
    } catch (err) {
      return res.status(500).send({
        success: false,
        status: 500,
        message: `Internal server error : ${err.message}`,
        data: [],
      });
    }
  },

  getProfile: async (req, res) => {
    try {
      const id = req.iduser;
      const user = await userModel.findUserById(id);
      if (user.length !== 0) {
        return res.status(200).send({
          success: true,
          status: 200,
          message: "success",
          data: user[0],
        });
      }
      return res.status(200).send({
        success: false,
        status: 200,
        message: "user is not identify",
        data: [],
      });
    } catch (err) {
      return res.status(500).send({
        success: false,
        status: 500,
        message: "internal server error",
        data: [],
      });
    }
  },

  updateProfile: async (req, res) => {
    try {
      const id = req.iduser;
      const data = Object.entries(req.body).map((item) => {
        return parseInt(item[1]) > 0
          ? `${item[0]} = ${item[1]}`
          : `${item[0]} = '${item[1]}'`;
      });
      const updated = await userModel.findAndUpdateById(id, data);
      if (updated.affectedRows) {
        return res.status(201).send({
          success: true,
          status: 200,
          message: "update profile successfully",
        });
      }
      return res.status(403).send({
        success: false,
        status: 403,
        message: "updated profile cannot be success",
      });
    } catch (err) {
      return res.status(500).send({
        success: false,
        status: 500,
        message: `internal server error : ${err.message}`,
      });
    }
  },

  uploadAvatar: async (req, res) => {
    try {
      const id = req.iduser;
      const user = await userModel.findUserById(id);
      const photo = !req.file
        ? user[0].photo
        : `${process.env.BASE_URI}/public/images/${req.file.filename}`;
      const data = Object.entries({ photo: photo }).map((item) => {
        return parseInt(item[1]) > 0
          ? `${item[0]} = ${item[1]}`
          : `${item[0]} = '${item[1]}'`;
      });
      const updated = await userModel.findAndUpdateById(id, data);
      if (updated.affectedRows) {
        return res.status(200).send({
          success: true,
          status: 200,
          message: "sucess updated image",
        });
      }
      return res.status(500).send({
        success: false,
        status: 500,
        message: "update profile cannot be success",
      });
    } catch (err) {
      return res.status(500).send({
        success: false,
        status: 500,
        message: `internal server error: ${err.message}`,
      });
    }
  },
};
