const { success, failed, notfound } = require("../../Helper/response");
const cityModel = require("../Models/cityModel");
const { upload } = require("../../Middleware/Type-File");
<<<<<<< HEAD
const cloudinary = require("../../Helper/cloudinary");
=======
>>>>>>> ec3526e... add chat
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  city: (req, res) => {
    try {
      upload.single("photo")(req, res, (err) => {
        if (err) {
          if (err.code === "LimitSize") {
            failed(res, [], "Image must less 5 mb");
          } else {
            failed(res, [], err.message);
          }
        } else {
          const body = req.body;
          body.photo = !req.file ? "images.png" : req.file.filename;

          cityModel
            .city(body)
            .then((result) => {
              success(res, result, `Insert data success!`);
            })
            .catch((err) => {
              failed(res, [], err.message);
            });
        }
      });
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

<<<<<<< HEAD
  update: async (req, res) => {
    try {
      const { idcity } = req.params;
      const user = await cityModel.getId(idcity);
      if (user.length == 1) {
        const photo = !req.file ? user[0].photocity : req.file.filename;
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
=======
  update: (req, res) => {
    try {
      upload.single("photo")(req, res, (err) => {
        if (err) {
          if (err.code === "LimitSize") {
            failed(res, [], "photo must less 5 mb");
          } else {
            failed(res, [], err.message);
          }
        } else {
          const id = req.params.idcity;
          const body = req.body;
          cityModel.getId(id).then(async (response) => {
            const responses = response[0].photo;
            const oldphoto = responses;
            body.photo = !req.file ? oldphoto : req.file.filename;
            if (body.photo !== oldphoto) {
              if (body.photo !== "images.png") {
                try {
                  await fs.unlink(path.join(`public/images/${oldphoto}`));
                  cityModel
                    .update(body, id)
                    .then((result) => {
                      success(res, result, "Update success");
                    })
                    .catch((err) => {
                      failed(res, [], err.message);
                    });
                } catch (err) {
                  failed(res, [], err.message);
                }
              } else {
                cityModel
                  .update(body, id)
                  .then((result) => {
                    success(res, result, "Update success");
                  })
                  .catch((err) => {
                    failed(res, [], err.message);
                  });
              }
            } else {
              cityModel
                .update(body, id)
                .then((result) => {
                  success(res, result, "Update data success");
                })
                .catch((err) => {
                  failed(res, [], err.message);
                });
            }
          });
        }
      });
    } catch (error) {
      failed(res, [], "Internal Server Error");
>>>>>>> ec3526e... add chat
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
