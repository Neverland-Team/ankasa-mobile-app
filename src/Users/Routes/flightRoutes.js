const router = require("express").Router();
const flightController = require("../Controllers/flightController");

router
  .post("/", flightController.flight)
  .get("/:idflight", flightController.getId)
  .patch("/update/:idflight", flightController.update)
  .delete("/delete/:idflight", flightController.delete);
module.exports = router;
