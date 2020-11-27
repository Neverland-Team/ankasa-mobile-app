const response = {
  success: (res, data, message) => {
    const result = {
      message,
      success: true,
      status: 200,
      data,
    };
    res.json(result);
  },

  failed: (res, data, message) => {
    const result = {
      message,
      success: false,
      status: 500,
      data,
    };
    res.json(result);
  },

  notfound: (res, data, message) => {
    const result = {
      message,
      success: false,
      status: 404,
      data,
    };
    res.json(result);
  },
};

module.exports = response;
