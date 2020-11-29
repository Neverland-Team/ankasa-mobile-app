const router = require("express").Router();
const bookingController = require("../Controllers/bookingController");
const verifyAuth = require("../../Middleware/verifyAuth");

router
  // .get("/getId/:idbooking", bookingController.getId)
  // Data Not Found
  // .get("/getAll", bookingController.getAllData)
  // Get Succes data ga muncul
  // .get("/userbooking/:iduser", bookingController.userbooking)
  // Data Not Found
  .post("/", bookingController.booking)
  .patch("/update/:idbooking", bookingController.update)
  .delete("/delete/:idbooking", bookingController.delete);
module.exports = router;
