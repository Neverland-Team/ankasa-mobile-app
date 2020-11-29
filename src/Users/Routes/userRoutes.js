const express = require("express");
const route = express.Router();
const userController = require("../Controllers/userControllers");
const verifyAuth = require("../../Middleware/verifyAuth");
const { validate, updateProfileValidationRules } = require("../../Middleware/validate");

route.get("/",
[verifyAuth.verifyToken], 
userController.getAllUser);

route.get("/profile",
[verifyAuth.verifyToken],
userController.getProfile);

route.patch("/profile",
[ updateProfileValidationRules(), validate, verifyAuth.verifyToken],
userController.updateProfile);

module.exports = route;