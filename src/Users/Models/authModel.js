const db = require("../../Config/db");
const bcrypt = require("bcrypt");

module.exports = {
    postRegister: ( data ) => {
        const { password, email} = data;
        return new Promise((resolve,reject) => {
            bcrypt.genSalt(10,(err,salt) => {
                bcrypt.hash(password, salt, (err,hash) => {
                    const body = { ...data,password: hash, email: email.toLowerCase() }
                    db.query("INSERT INTO users SET ? ", body, (err,results) => {
                        if(!err){
                            resolve(results);
                        }else{
                            reject(new Error(err));
                        }
                    })
                })
            })
        })
    },

    findByEmail: (email) => {
        return new Promise((resolve,reject) => {
            db.query(`SELECT * FROM users WHERE email = '${email}'`,(err,result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        })
    },

    findByUsername: (username) => {
        return new Promise((resolve,reject) => {
            db.query(`SELECT * FROM users WHERE username  = '${username}'`,(err,result) => {
                if(!err){
                    resolve(result);
                }else{
                    reject(new Error(err));
                }
            })
        });
    }
}