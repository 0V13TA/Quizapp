const api_key = process.env.VITE_API_KEY;
const cloudinary = require("cloudinary").v2;
const cloud_name = process.env.VITE_CLOUD_NAME;
const api_secret = process.env.VITE_API_SECRET;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
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
