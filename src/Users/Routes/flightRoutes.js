const router = require("express").Router();
const flightController = require("../Controllers/flightController");
const verifyAuth = require("../../Middleware/verifyAuth");

router
  .post("/", [verifyAuth.verifyToken], flightController.flight)
  .get("/getId/:idflight", [verifyAuth.verifyToken], flightController.getId)
  .get("/getAll", [verifyAuth.verifyToken], flightController.getAll)
  .get("/search", [verifyAuth.verifyToken], flightController.getAllSearch)
  .patch("/update/:idflight", [verifyAuth.verifyToken], flightController.update)
  .delete(
    "/delete/:idflight",
    [verifyAuth.verifyToken],
    flightController.delete
  );
module.exports = router;
