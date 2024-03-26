"use server";
import { v2 as cloudinary } from "cloudinary";
import { getSession } from "../authOptions";
import { updateUser } from "./user.actions";

export const uploadImage = async (file: any) => {
  const session = await getSession();
  if (!session) {
    throw new Error("You must be logged in to upload an image");
  }
  const email = session?.user?.email as string;
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  const result = await cloudinary.uploader.upload(file, {
    folder: "gitnote",
  });
  await updateUser({
    email,
    updateData: { image: result.secure_url },
    path: "/",
  });

  return result.secure_url;
};
