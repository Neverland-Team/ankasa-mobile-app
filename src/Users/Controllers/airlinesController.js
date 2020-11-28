const { success, failed, notfound } = require("../../Helper/response");
const airlinesModel = require("../Models/airlinesModel");
const upload = require("../../Middleware/Type-File");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  airlines: (req, res) => {
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

          airlinesModel
            .airlines(body)
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
    console.log(req.iduser,req.email,req.username,req.role);
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
      console.log("data dari getId: ", id);
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
          const id = req.params.idairlines;
          const body = req.body;
          airlinesModel.getId(id).then(async (response) => {
            const responses = response[0].photo;
            const oldphoto = responses;
            body.photo = !req.file ? oldphoto : req.file.filename;
            if (body.photo !== oldphoto) {
              if (body.photo !== "images.png") {
                try {
                  await fs.unlink(path.join(`public/images/${oldphoto}`));
                  airlinesModel
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
                airlinesModel
                  .update(body, id)
                  .then((result) => {
                    success(res, result, "Update success");
                  })
                  .catch((err) => {
                    failed(res, [], err.message);
                  });
              }
            } else {
              airlinesModel
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
