const jwt = require("jsonwebtoken");
const authModel = require("../Users/Models/authModel");

module.exports = {
    verifyToken = (req,res,next) => {
        let tokenHeader = req.headers["Authorization"];
        if(!tokenHeader){
            return res.status(403).send({
                success: false,
                auth:false,
                message: "Error",
                errors: "No token provided"
            })
        }
        jwt.verify(tokenHeader, process.env.SECRET_KEY,(err,decoded) => {
            if(err){
                return res.status(500).send({
                    success: false,
                    message: err
                })
            }
            return next();
        })
    }
}