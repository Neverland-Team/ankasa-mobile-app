const multer = require("multer");

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

module.exports = upload;
