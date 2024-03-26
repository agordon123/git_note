"use client";
import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import Image from "next/image";
import { LuUploadCloud } from "react-icons/lu";

import { Input } from "@/components/ui/input";
import { uploadImage } from "@/lib/actions/cloudinary.actions";
interface UploadPhotoProps {
  image?: string;
  className?: string;
}
const UploadPhoto = ({ image, className }: UploadPhotoProps) => {
  const { register, handleSubmit, getValues, watch } = useForm();
  const watchInput = watch("file");
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register("file");
  const onSubmit = async () => {
    inputRef.current?.click();
  };
  useEffect(() => {
    const file = getValues("file")[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const fileData = reader.result;
      await uploadImage(fileData);
    };
  }, [getValues, watchInput]);
  return (
    <>
      <div className="inline-flex flex-row items-center gap-x-[14px] space-y-2 align-middle">
        <Image
          src={image!}
          alt="profile picture"
          width={90}
          height={90}
          className="inset-inline-start "
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="file"
            className="hidden"
            {...rest}
            ref={(e) => {
              ref(e);
              inputRef.current = e;
            }}
          />
          <button
            type="submit"
            className="inset-inline-end paragraph-3-medium r flex h-[40px] w-[200px] flex-row items-center gap-2 rounded-[5px] bg-black-700 px-3.5 py-2 align-middle text-white-300  shadow shadow-gray-800/10 "
          >
            {" "}
            <LuUploadCloud size={32} />
            <span className="text-nowrap">Upload Profile Picture</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadPhoto;
