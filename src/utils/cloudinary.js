import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath, deleteFile = true) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
      folder: 'backend/user',
    });

    // Remove the local file
    if (deleteFile) {
      fs.unlinkSync(localFilePath);
    }
    return response;
  } catch (error) {
    // Remove the local file if upload fails
    fs.unlinkSync(localFilePath);
    console.error('Error during upload:', error);
    return null;
  }
};

export { uploadOnCloudinary };
