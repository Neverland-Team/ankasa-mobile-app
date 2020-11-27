const router = require("express").Router();
const cityController = require("../Controllers/cityController");

router
  .post("/", cityController.city)
  .get("/", cityController.getAll)
  .get("/:idcity", cityController.getId)
  .patch("/update/:idcity", cityController.update)
  .delete("/delete/:idcity", cityController.delete);
module.exports = router;
