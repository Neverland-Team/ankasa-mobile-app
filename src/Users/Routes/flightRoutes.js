const router = require("express").Router();
const flightController = require("../Controllers/flightController");

router
  .post("/", flightController.flight)
  .get("/getId/:idflight", flightController.getId)
  .get("/getAll", flightController.getAll)
  .patch("/update/:idflight", flightController.update)
  .delete("/delete/:idflight", flightController.delete);
module.exports = router;
