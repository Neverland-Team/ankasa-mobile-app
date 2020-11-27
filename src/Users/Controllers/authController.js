const authModel = require("../Models/authModel");
const jwt = require("jsonwebtoken");

exports.register = async (req,res) => {
    try {
        const data = req.body;
        const response = await authModel.postRegister(data);
        return res.status(200).send({
            success: true,
            message: "register is successfuly",
            data: response
        })
    }catch(err){
        return res.status(500).send({
            success: false,
            message: err.message
        })
    }
}

exports.login = async (req,res) => {
    try {
        const {username} = req.body;
        const user = await authModel.findByUsername(username);
        let token = jwt.sign(
            {
                iduser: user[0].iduser,
                email: user[0].email,
                username: user[0].username,
                role: user[0].role
            }, process.env.SECRET_KEY
        )
        return res.status(201).send({
            success: true,
            auth: true,
            accessToken: token
        })
    }catch(err){
        return res.status(500).send({
            success: false,
            message: "internal server error"
        })
    }
}