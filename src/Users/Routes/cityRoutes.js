const router = require("express").Router();
const cityController = require("../Controllers/cityController");
const verifyAuth = require("../../Middleware/verifyAuth");
const { preUploadImage } = require("../../Middleware/Type-File");

router
  .post("/", [verifyAuth.verifyToken, preUploadImage], cityController.city)
  .get("/", [verifyAuth.verifyToken], cityController.getAll)
  .get("/search/:search", [verifyAuth.verifyToken], cityController.search)
  .get("/:idcity", [verifyAuth.verifyToken], cityController.getId)
  .patch("/update/:idcity", [verifyAuth.verifyToken,preUploadImage], cityController.update)
  .delete("/delete/:idcity", [verifyAuth.verifyToken], cityController.delete);

module.exports = router;
