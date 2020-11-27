const router = require("express").Router();
const { airlines } = require("../Controllers/airlinesController");
const airlinesController = require("../Controllers/airlinesController");

router
  .post("/", airlinesController.airlines)
  .get("/getAll", airlinesController.getAllData)
  .get("/", airlinesController.getAll)
  .get("/:idairlines", airlinesController.getId)
  .patch("/update/:idairlines", airlinesController.update)
  .delete("/delete/:idairlines", airlinesController.delete);
module.exports = router;
