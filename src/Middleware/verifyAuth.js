const jwt = require("jsonwebtoken");

const {
  tokenExpiredResult,
  tokenErrorResult,
  forbidden,
} = require("../Helper/response");

module.exports = {
  verifyToken: (req, res, next) => {
    let tokenHeader = req.headers["authorization"];
    if (!tokenHeader) {
      return res.status(403).send({
        success: false,
        auth: false,
        message: "Error",
        errors: "No token provided",
      });
    }
    jwt.verify(tokenHeader, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(500).send({
          success: false,
          message: err,
        });
      }
      req.iduser = decoded.iduser;
      req.email = decoded.email;
      (req.username = decoded.username), (req.role = decoded.role);
      return next();
    });
  },

  verifyAdmin: (req, res, next) => {
    let tokenHeader = req.headers["authorization"];
    if (!tokenHeader) {
      return res.status(403).send({
        success: false,
        auth: false,
        message: "Error",
        errors: "No token provided",
      });
    }
    jwt.verify(tokenHeader, process.env.SECRET_KEY, (err, decode) => {
      if (err && err.name === "JsonWebTokenError") {
        tokenErrorResult(res, [], "Authentification failed !");
      } else if (err && err.name === "TokenExpiredError") {
        tokenExpiredResult(res, [], "Token Expired !");
      } else {
        if (decode.role === 6) {
          next();
        } else {
          forbidden(res, "Dont have permission!");
        }
      }
    });
  },
};
