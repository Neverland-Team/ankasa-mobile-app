const jwt = require("jsonwebtoken");
const {
  tokenExpiredResult,
  tokenErrorResult,
  forbidden,
} = require("../Helper/response");

module.exports = {
  authentication: (req, res, next) => {
    const token = req.headers.token;
    if (token === undefined || token === "") {
      tokenErrorResult(res, [], "Token Must Be Completed !");
    } else {
      next();
    }
  },
  authorization: (req, res, next) => {
    const token = req.headers.token;
    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err && err.name === "TokenExpiredError") {
        tokenExpiredResult(res, [], "Authentication failed or token expired !");
      } else if (err && err.name === "JsonWebTokenError") {
        tokenErrorResult(
          res,
          [],
          "Authentication failed or token dont match !"
        );
      } else {
        next();
      }
    });
  },
  admin: (req, res, next) => {
    const token = req.headers.token;
    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
      if (err && err.name === "JsonWebTokenError") {
        tokenErrorResult(res, [], "Authentication failed !");
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
