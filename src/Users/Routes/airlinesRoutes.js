const router = require("express").Router();
const airlinesController = require("../Controllers/airlinesController");
const verifyAuth = require("../../Middleware/verifyAuth");

router
  .post("/", airlinesController.airlines)
  .get("/getAll", airlinesController.getAllData)
  .get("/",[verifyAuth.verifyToken],airlinesController.getAll)
  .get("/:idairlines", airlinesController.getId)
  .patch("/update/:idairlines", airlinesController.update)
  .delete("/delete/:idairlines", airlinesController.delete);
module.exports = router;
