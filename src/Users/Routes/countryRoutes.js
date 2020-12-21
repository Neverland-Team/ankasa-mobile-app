const router = require("express").Router();
const countryController = require("../Controllers/countryController");
const verifyAuth = require("../../Middleware/verifyAuth");

router
  .post("/", [verifyAuth.verifyToken], countryController.country)
  .get("/getAll", [verifyAuth.verifyToken], countryController.getAllData)
  .get("/", [verifyAuth.verifyToken], countryController.getAll)
  .get("/detail/:idcountry", [verifyAuth.verifyToken], countryController.getId)
  .patch(
    "/update/:idcountry",
    [verifyAuth.verifyToken],
    countryController.update
  )
  .delete(
    "/delete/:idcountry",
    [verifyAuth.verifyToken],
    countryController.delete
  );
module.exports = router;
