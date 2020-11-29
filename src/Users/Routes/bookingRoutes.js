const router = require("express").Router();
const bookingController = require("../Controllers/bookingController");
const verifyAuth = require("../../Middleware/verifyAuth");

router
  .get("/", bookingController.getAllData)
  .get("/:idbooking", bookingController.getId)
  .get("/userbooking/:iduser", bookingController.userbooking)
  .post("/", bookingController.booking)
  .patch("/update/:idbooking", bookingController.update)
  .delete("/delete/:idbooking", bookingController.delete);
module.exports = router;
