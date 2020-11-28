const db = require("../../Config/db");

module.exports = {
    findAllUser: (limit,page) => {
        return new Promise((resolve,reject) => {
            db.query(`SELECT * FROM users ORDER BY iduser DESC LIMIT ${limit} OFFSET ${(page - 1) * limit}`,(err,results) => {
                if(!err){
                    resolve(results);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },

    findUserById: (id) => {
            return new Promise((resolve,reject) => {
                db.query(`SELECT * FROM users WHERE iduser = ${id}`,(err,result) => {
                    if(!err){
                        resolve(result);
                    }else{
                        reject(new Error(err));
                    }
                })
            })
    }
}