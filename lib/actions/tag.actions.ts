"use server";
import dbConnect from "@/database/dbConnect";
import {
  GetTagByPostIdParams,
  UpdateTagParams,
  CreateNewTagParams,
} from "@/lib/actions/shared.types";
import tagModel, { ITag } from "@/database/models/tag.model";
import { revalidatePath } from "next/cache";

export const createNewTag = async (data: CreateNewTagParams) => {
  try {
    await dbConnect();
    const tag = await tagModel.create({
      name: data.name,
      postId: data.postId,
    });

    return tag;
  } catch (error) {
    console.log(error);
  }
};
export const updateTag = async (params: UpdateTagParams) => {
  try {
    await dbConnect();
    const { _id, updateData, path } = params;
    await tagModel.findOneAndUpdate({ _id }, updateData);
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
};

export const getTagByPostId = async ({ postId }: GetTagByPostIdParams) => {
  try {
    await dbConnect();
    const tags = await tagModel.find({ postId });
    return tags as ITag[];
  } catch (error) {
    console.log(error);
  }
};
export const getTagById = async ({ _id }: { _id: string }) => {
  try {
    await dbConnect();
    const tag = await tagModel.findById(_id);
    return tag as ITag;
  } catch (error) {
    console.log(error);
  }
};
export const getTagByName = async ({ name }: { name: string }) => {
  try {
    await dbConnect();
    const tag = await tagModel.findOne({ name });
    return tag as ITag;
  } catch (error) {
    console.log(error);
  }
};
