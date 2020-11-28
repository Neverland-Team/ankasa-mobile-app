const jwt = require("jsonwebtoken");

module.exports = {
    verifyToken : (req,res,next) => {
        let tokenHeader = req.headers["authorization"];
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
            req.iduser = decoded.iduser;
            req.email = decoded.email;
            req.username = decoded.username,
            req.role = decoded.role
            return next();
        })
    }
}