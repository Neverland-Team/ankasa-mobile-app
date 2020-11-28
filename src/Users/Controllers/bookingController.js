const bookingModel = require("../Models/bookingModel");
const { success, failed, notfound } = require("../../Helper/response");

module.exports = {
  booking: (req, res) => {
    try {
      const body = req.body;
      bookingModel
        .booking(body)
        .then((result) => {
          success(res, result, "Booking Success");
        })
        .catch((err) => {
          failed(res, [], err.message);
        });
    } catch (error) {
      failed(res, [], error.message);
    }
  },

  // getAllData: (req, res) => {
  //   try {
  //     bookingModel
  //       .getAllData()
  //       .then((result) => {
  //         success(res, result, "Get all data success");
  //       })
  //       .catch((err) => {
  //         failed(res, [], err.message);
  //       });
  //   } catch (error) {
  //     failed(res, [], error.message);
  //   }
  // },

  // getId: (req, res) => {
  //   try {
  //     const id = req.params.idbooking;
  //     bookingModel
  //       .getId(id)
  //       .then((result) => {
  //         if (result.length === 0) {
  //           failed(res, [], "Data Not Found!");
  //         } else {
  //           success(res, result, "Get Detail Success");
  //         }
  //       })
  //       .catch((err) => {
  //         failed(res, [], err.message);
  //       });
  //   } catch (error) {
  //     failed(res, [], error.message);
  //   }
  // },

  // userbooking: (req, res) => {
  //   try {
  //     const iduser = req.params.iduser;
  //     bookingModel
  //       .userbooking(iduser)
  //       .then((result) => {
  //         if (result.length === 0) {
  //           notfound(res, [], "Data not found");
  //         } else {
  //           success(
  //             res,
  //             result,
  //             `Get data booking where ID users: ${iduser} success`
  //           );
  //         }
  //       })
  //       .catch((err) => {
  //         failed(res, [], err.message);
  //       });
  //   } catch (error) {
  //     failed(res, [], error.message);
  //   }
  // },

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
