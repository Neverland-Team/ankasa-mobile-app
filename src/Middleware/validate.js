const { body,validationResult } = require("express-validator");
const authModel = require("../Users/Models/authModel");

const registerValidationRules = () => {
    return [
        body("email").isEmail().withMessage("email address is not correctly").not().isEmpty().withMessage("email cannot be empty"),
        body("password").isLength({min :5}).withMessage("password must be at least 5 characters").not().isEmpty().withMessage("password cannot be empty"),
        body("username").isAlphanumeric().withMessage("username must be alpha numeric").not().isEmpty().withMessage("username canot be empty"),
    ]
}

const loginValidationRules = () => {
    return [
        body("username").custom(value => {
            return authModel.findByUsername(value)
            .then(user => {
                if(user.length !== 1){
                    return Promise.reject("username not exists");
                }
            })
        }),
        body("password").not().isEmpty().withMessage("password cannot be empty")
    ]
}

const emailExists = (req,res,next) => {
    const { email } = req.body;
    authModel.findByEmail(email)
    .then(result => {
        if(result.length !== 1){
            return next();
        }
        return res.status(409).send({
            success: false,
            errors: [
                {
                    email: "email already in use"
                }
            ]
        })
    })
}

const usernameExists = (req,res,next) => {
    const { username } = req.body;
    authModel.findByUsername(username)
    .then(result => {
        if(result.length !== 1){
            return next();
        }
        return res.status(409).send({
            success: false,
            errors: [
                {
                    username: "username already in use"
                }
            ]
        })
    })
}

const validate = (req,res,next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }

    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({[err.param] : err.msg}));

    return res.status(433).send({
        success: false,
        errors: extractedErrors
    })
}

module.exports = {
    registerValidationRules,
    validate,
    emailExists,
    usernameExists,
    loginValidationRules
}