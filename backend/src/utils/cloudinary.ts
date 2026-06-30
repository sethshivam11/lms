import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (filePath: string, folder: string) => {
  try {
    let transformation = {};
    if (folder === "avatars") {
      transformation = {
        crop: "fill",
        aspect_ratio: "1:1",
        gravity: "face",
      };
    }
    const result = await cloudinary.uploader.upload(filePath, {
      folder: `lms/${folder}`,
      transformation,
      upload_preset: process.env.CLOUDINARY_PRESET,
    });

    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    return result.secure_url;
  } catch (error) {
    console.log("Cloudinary upload error:", error);
  }
};

const deleteFromCloudinary = async (publicId: string) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.log("Cloudinary deletion error:", error);
  }
};

export { uploadToCloudinary, deleteFromCloudinary };
