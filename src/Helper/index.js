const formResponse = (token, res, status, message) => {
  if (status >= 200 && status < 202) {
    return res.status(status).json({
      success: true,
      message: message,
      token: token,
    });
  } else {
    return res.status(status).json({
      success: false,
      message: message,
      token: [],
    });
  }
};

module.exports = formResponse;
