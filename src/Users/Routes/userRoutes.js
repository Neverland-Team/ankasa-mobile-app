const express = require("express");
const route = express.Router();
const userController = require("../Controllers/userControllers");
const verifyAuth = require("../../Middleware/verifyAuth");

route.get("/",[verifyAuth.verifyToken], userController.getAllUser);
route.get("/profile",[verifyAuth.verifyToken],userController.getProfile);

module.exports = route;