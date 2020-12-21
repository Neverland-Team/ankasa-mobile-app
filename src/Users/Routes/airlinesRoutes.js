const router = require("express").Router();
const airlinesController = require("../Controllers/airlinesController");
const verifyAuth = require("../../Middleware/verifyAuth");
const { preUploadImage } = require("../../Middleware/Type-File");

router
  .post("/", [verifyAuth.verifyToken, preUploadImage], airlinesController.airlines)

  .get("/getAll", [verifyAuth.verifyToken], airlinesController.getAllData)

  .get("/", [verifyAuth.verifyToken], airlinesController.getAll)

  .get("/:idairlines", [verifyAuth.verifyToken], airlinesController.getId)

  .patch(
    "/update/:idairlines",
    [verifyAuth.verifyToken, preUploadImage],
    airlinesController.update
  )

  .delete(
    "/delete/:idairlines",
    [verifyAuth.verifyToken],
    airlinesController.delete
  );
module.exports = router;
