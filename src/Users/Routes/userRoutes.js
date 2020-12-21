const express = require("express");
const route = express.Router();
const userController = require("../Controllers/userControllers");
const verifyAuth = require("../../Middleware/verifyAuth");
const { validate, updateProfileValidationRules } = require("../../Middleware/validate");
const upload = require("../../Middleware/Type-File");

route.get("/",
[verifyAuth.verifyToken], 
userController.getAllUser);

route.get("/profile",
[verifyAuth.verifyToken],
userController.getProfile);

route.patch("/profile",
[ updateProfileValidationRules(), validate, verifyAuth.verifyToken],
userController.updateProfile);

route.post("/profile/upload",
[verifyAuth.verifyToken, upload.preUploadImage],
userController.uploadAvatar)

module.exports = route;