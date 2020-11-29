const multer = require("multer");
const helper = require("../Helper/imageFilter");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}.png`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 10000 * 10000 },
  fileFilter(req, file, cb) {
    if (file.originalname.match(/\.(jpg|jpeg|png)\b/)) {
      cb(null, true);
    } else {
      cb("Image type must jpg, jpeg or png", null);
    }
  },
});

const preUploadImage = (req,res,next) => {
  const upload = multer({
    storage: storage,
    fileFilter: helper.imageFilter,
    limits: { fileSize: 5 * 10000 * 10000 }
  }).single("photo");
  upload(req,res,(err) => {
    if(req.fileValidationError){
      return res.status(500).send({
        success: false,
        status: 500,
        message: err.message
      })
    }
    if(err instanceof multer.MulterError){
      return res.status(500).send({
        success: false,
        status: 500,
        message: err.message
      })
    }
    if(err){
      return res.status(500).send({
        success: false,
        status: 500,
        message: err.message
      })
    }
    return next();
  })
}

module.exports = {
  upload,
  preUploadImage
};
