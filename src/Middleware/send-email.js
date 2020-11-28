const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

module.exports = {
    sendEmail: (req,res,next) => {
        let token = jwt.sign(
            {
                email: req.body.email
            }, process.env.SECRET_KEY
        )
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: "neverlandteam8@gmail.com",
                pass: "neverland_team_8",
            },
        });

        let mailOptions = {
            from: "<neverlandteam8@gmail.com>",
            to: `${req.body.email}`,
            subject: "sending email for forgot password",
            html: `
            <h1>Link forgot password</h1>
            <p>token for reset password</p>
            <a href="">http://localhost:8000?${token}</a>
            `
        }

        transporter.sendMail(mailOptions,(err,info) => {
            if(err) throw err;
            req.token = token;
            console.log(info.response);
            return next();
        })  
    } 
}