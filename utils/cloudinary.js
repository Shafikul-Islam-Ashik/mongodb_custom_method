import cloudinary from "cloudinary";

// import {v2 as cloudinary} from 'cloudinary';
import dotenv from "dotenv";

dotenv.config();

// cloudnary config
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// file upload
export const cloudUpload = async (path) => {
  const fileData = await cloudinary.v2.uploader.upload(path);
  return fileData.secure_url;
};
