const authModel = require("../Models/authModel");
const { body } = require("express-validator");

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
    const { username,password } = req.body;
    return res.status(200).send({
        success: true,
        message: "halo semua"
    })
}