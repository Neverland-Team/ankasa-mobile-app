const express = require("express");
const route = express.Router();
const authController = require("../Controllers/authController");
const { registerValidationRules, validate, emailExists, usernameExists, loginValidationRules } = require("../../Middleware/validate");

route.post("/register",
[registerValidationRules(),validate, emailExists, usernameExists],
authController.register);

route.post("/login",[loginValidationRules(), validate],authController.login);

module.exports = route;