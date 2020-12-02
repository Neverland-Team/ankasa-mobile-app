const router = require("express").Router();
const cityController = require("../Controllers/cityController");
const verifyAuth = require("../../Middleware/verifyAuth");
<<<<<<< HEAD
const { preUploadImage } = require("../../Middleware/Type-File");
=======
>>>>>>> ec3526e... add chat

router
  .post("/", [verifyAuth.verifyToken], cityController.city)
  .get("/", [verifyAuth.verifyToken], cityController.getAll)
  .get("/:idcity", [verifyAuth.verifyToken], cityController.getId)
<<<<<<< HEAD
  .patch("/update/:idcity", [verifyAuth.verifyToken,preUploadImage], cityController.update)
=======
  .patch("/update/:idcity", [verifyAuth.verifyToken], cityController.update)
>>>>>>> ec3526e... add chat
  .delete("/delete/:idcity", [verifyAuth.verifyToken], cityController.delete);
module.exports = router;
