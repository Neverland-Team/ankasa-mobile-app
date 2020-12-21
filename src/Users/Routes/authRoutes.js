const express = require("express");
const route = express.Router();
const authController = require("../Controllers/authController");
const mail = require("../../Middleware/send-email");
const { 
    registerValidationRules, 
    validate, 
    emailExists, 
    usernameExists, 
    loginValidationRules,
    forgotCheckEmail, 
    resetPasswordValidationRules
} = require("../../Middleware/validate");

route.post("/register",
[registerValidationRules(),validate, emailExists, usernameExists],
authController.register);

route.post("/login",
[loginValidationRules(), validate],
authController.login);

route.post("/forgot",
[forgotCheckEmail(),validate, mail.sendEmail],
authController.forgot);

route.patch("/reset",
[resetPasswordValidationRules(), validate],
authController.reset)

module.exports = route;