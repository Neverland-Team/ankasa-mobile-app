const router = require("express").Router();
const cityController = require("../Controllers/cityController");
const verifyAuth = require("../../Middleware/verifyAuth");
const { preUploadImage } = require("../../Middleware/Type-File");

router
  .post("/", [verifyAuth.verifyToken], cityController.city)
  .get("/", [verifyAuth.verifyToken], cityController.getAll)
  .get("/:idcity", [verifyAuth.verifyToken], cityController.getId)
  .patch("/update/:idcity", [verifyAuth.verifyToken,preUploadImage], cityController.update)
  .delete("/delete/:idcity", [verifyAuth.verifyToken], cityController.delete);
module.exports = router;
