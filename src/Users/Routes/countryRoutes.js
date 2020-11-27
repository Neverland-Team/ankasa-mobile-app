const router = require("express").Router();
const countryController = require("../Controllers/countryController");

router
  .post("/", countryController.country)
  .get("/getAll", countryController.getAllData)
  .get("/", countryController.getAll)
  .get("/detail/:idcountry", countryController.getId)
  .patch("/update/:idcountry", countryController.update)
  .delete("/delete/:idcountry", countryController.delete);
module.exports = router;
