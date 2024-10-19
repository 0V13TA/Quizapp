const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "drtn2jrvh",
  api_key: "941814149596212",
  api_secret: "EC3RgrEwR9Jyh5t1Y7bjNvbZwOg",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "imageUploads",
    format: async (req, file) => {
      return file.mimetype.split("/")[1];
    },
    public_id: (req, file) => {
      return `${Date.now()}_${file.originalname.split(".")[0]}`;
    },
  },
});

module.exports = storage;
