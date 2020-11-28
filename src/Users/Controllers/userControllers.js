const userModel = require("../Models/userModel");

module.exports = {
    getAllUser: async (req,res) => {
        try {
            let {limit, page} = req.query;
            if(!limit) limit = 5;
            else limit = parseInt(limit);
            if(!page) page = 1;
            else page = parseInt(page);
            const users = await userModel.findAllUser(limit,page);
            return res.status(200).send({
                success: true,
                message: "success fetch users data",
                data: users
            })
        }catch(err){
            return res.status(500).send({
                success: false,
                message: `Internal server error : ${err.message}`,
                data: []
            })
        }
    },

    getProfile: async (req,res) => {
        try {
            const id = req.iduser;
            const user = await userModel.findUserById(id)
            if(user.length !== 0){
                return res.status(200).send({
                    success: true,
                    message: "success",
                    data: user[0]
                })
            }
            return res.status(200).send({
                success: false,
                message: "user is not identify",
                data: []
            })
        }catch(err){
            return res.status(500).send({
                success: false,
                message: "internal server error",
                data: []
            })
        }
    }
}