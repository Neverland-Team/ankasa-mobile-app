const router = require("express").Router();
const bookingController = require("../Controllers/bookingController");
const verifyAuth = require("../../Middleware/verifyAuth");

router
  .get("/", [verifyAuth.verifyToken], bookingController.getAllData)
  .get("/:idbooking", [verifyAuth.verifyToken], bookingController.getId)
  .get(
    "/userbooking/:iduser",
    [verifyAuth.verifyToken],
    bookingController.userbooking
  )
  .post("/", [verifyAuth.verifyToken], bookingController.booking)
  .patch(
    "/update/:idbooking",
    [verifyAuth.verifyToken],
    bookingController.update
  )
  .delete(
    "/delete/:idbooking",
    [verifyAuth.verifyToken],
    bookingController.delete
  );
module.exports = router;
