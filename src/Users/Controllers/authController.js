const authModel = require("../Models/authModel");
const jwt = require("jsonwebtoken");

exports.register = async (req,res) => {
    try {
        const data = {...req.body,role: 7};
        const response = await authModel.postRegister(data);
        return res.status(200).send({
            success: true,
            status: 200,
            message: "register is successfuly",
            data: response
        })
    }catch(err){
        return res.status(500).send({
            success: false,
            status: 500,
            message: `internal server error : ${err.message}` 
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
            status: 201,
            auth: true,
            accessToken: token
        })
    }catch(err){
        return res.status(500).send({
            success: false,
            status: 500,
            message: `internal server error : ${err.message}`
        })
    }
}


exports.forgot = async (req,res) => {
    const {email} = req.body;
    return res.status(200).send({
        success: true,
        status: 200,
        message: "token successfully sent please check your email",
        email: email,
        token: req.token
    });
}

exports.reset = async (req,res) => {
    const { token } = req.query;
    const { password } = req.body;
    let data = {};
    if(!token){
        return res.status(403).send({
            success: false,
            status: 403,
            message: "Error",
            errors: "No token provided"
        })
    }
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded) => {
        if(err){
            return res.status(500).send({
                success: false,
                status: 500,
                message: `internal server error: ${err.message}`
            })
        }
        data = {email: decoded.email, password: password};   
    })
    const updated = await authModel.findAndUpateByEmail(data);
    if(updated.affectedRows == 1){
        return res.status(200).send({
            success: true,
            status: 200,
            message: `successfully updated password ${data.email}`,
            data: updated
        });
    }
    return res.status(500).send({
        success: false,
        status: 500,
        message: `internal server error: ${err.message}`,
        data: []
    })
}