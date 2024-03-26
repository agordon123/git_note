"use server";
import postModel, { IPost } from "@/database/models/post.model";
import { revalidatePath } from "next/cache";
import dbConnect from "@/database/dbConnect";
import { FilterQuery } from "mongoose";

import {
  CreateNewPostParams,
  DeletePostParams,
  GetPostParams,
  GetTagByPostIdParams,
  UpdatePostParams,
} from "./shared.types";

// just using basic crud funcitons for now
export const getAllPosts = async (params: GetPostParams) => {
  try {
    await dbConnect();
    const { searchQuery, filter, page = 1, pageSize = 10 } = params;

    const skipAmount = (page - 1) * pageSize;

    const query: FilterQuery<IPost> = {};

    if (searchQuery) {
      query.$or = [{ name: { $regex: new RegExp(searchQuery, "i") } }];
    }
    let sortOptions = {};

    switch (filter) {
      case "components":
        query.postType = "components";
        sortOptions = { createdAt: -1 };
        break;
      case "knowledge":
        query.postType = "knowledge";
        sortOptions = { createdAt: -1 };
        break;
      case "workflows":
        query.postType = "workflows";
        sortOptions = { createdAt: -1 };
        break;
      default:
        sortOptions = { createdAt: -1 };
        break;
    }
    const totalPosts = await postModel.countDocuments(query);

    const filteredPosts = await postModel
      .find(query)
      .sort(sortOptions)
      .skip(skipAmount)
      .limit(pageSize);
    const isNext = totalPosts > skipAmount + postModel.length;

    return { posts: filteredPosts as IPost[], isNext };
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (postId: GetTagByPostIdParams) => {
  try {
    await dbConnect();
    const post = await postModel.findById(postId);
    return post as IPost;
  } catch (error) {
    console.log(error);
  }
};

export const createNewPost = async (data: CreateNewPostParams) => {
  try {
    await dbConnect();
    const post = (await postModel.create({
      title: data.title,
      body: data.body,
      author: data.author,
      postType: data.postType,
      tags: data.tags,
      resourceLink: data.resourceLink,
    })) as IPost;

    return post as IPost;
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async ({
  _id,
  updateData,
  path,
}: UpdatePostParams) => {
  try {
    await dbConnect();

    const post = await postModel.findByIdAndUpdate(_id, updateData, {
      new: true,
    });
    revalidatePath(path);
    return post as IPost;
  } catch (error) {
    console.log(error);
  }
};

export const deletePostById = async (_id: DeletePostParams) => {
  try {
    await dbConnect();
    const deletedPost = await postModel.findByIdAndDelete(_id);
    return deletedPost as IPost;
  } catch (error) {
    console.log(error);
  }
};
