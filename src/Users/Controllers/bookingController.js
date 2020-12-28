const bookingModel = require("../Models/bookingModel");
const { success, failed, notfound } = require("../../Helper/response");
const midtransClient = require("midtrans-client");
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-ZvK1XrFozq8bFIUHYH5grfSk",
  clientKey: "SB-Mid-client-i_EGfhfpfwFtL_Er",
});

module.exports = {
  booking: (req, res) => {
    try {
      // const body = req.body;
      const { total } = req.body;
      const order = "ticket-" + Math.round(new Date().getTime() / 1000);
      let parameter = {
        transaction_details: {
          order_id: order,
          gross_amount: parseInt(total),
        },
        credit_card: {
          secure: true,
        },
      };
      snap.createTransaction(parameter).then((transaction) => {
        let token = transaction.token;
        const body =  {...req.body,token:order};
        bookingModel
          .booking(body)
          .then((result) => {
            success(res, token, "Booking Success");
          })
          .catch((err) => {
            failed(res, [], err.message);
          });
      });
    } catch (error) {
      failed(res, [], error.message);
    }
  },

  getAllData: (req, res) => {
    try {
      bookingModel
        .getAllData(req.iduser)
        .then((result) => {
          success(res, result, "Get all data success");
        })
        .catch((err) => {
          failed(res, [], err.message);
        });
    } catch (error) {
      failed(res, [], error.message);
    }
  },

  getId: (req, res) => {
    try {
      const id = req.params.idbooking;
      bookingModel
        .getId(id)
        .then((result) => {
          if (result.length === 0) {
            failed(res, [], "Data Not Found!");
          } else {
            success(res, result, "Get Detail Success");
          }
        })
        .catch((err) => {
          failed(res, [], err.message);
        });
    } catch (error) {
      failed(res, [], error.message);
    }
  },

  userbooking: (req, res) => {
    try {
      const iduser = req.params.iduser;
      bookingModel
        .userbooking(iduser)
        .then((result) => {
          if (result.length === 0) {
            notfound(res, [], "Data not found");
          } else {
            success(
              res,
              result,
              `Get data booking where ID users: ${iduser} success`
            );
          }
        })
        .catch((err) => {
          failed(res, [], err.message);
        });
    } catch (error) {
      failed(res, [], error.message);
    }
  },

  update: (req, res) => {
    try {
      const id = req.params.idbooking;
      const body = req.body;
      bookingModel
        .update(body, id)
        .then((result) => {
          success(res, result, "Update success");
        })
        .catch((err) => {
          failed(res, [], err.message);
        });
    } catch (error) {
      failed(res, [], error.message);
    }
  },

  delete: (req, res) => {
    try {
      const id = req.params.idbooking;
      bookingModel
        .delete(id)
        .then((result) => {
          success(res, result, "Delete success");
        })
        .catch((err) => {
          failed(res, [], err.message);
        });
    } catch (error) {
      failed(res, [], error.message);
    }
  },
};
