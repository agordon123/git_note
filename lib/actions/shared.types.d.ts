import { IUser } from "@/database/models/user.model";
import { Schema } from "mongoose";
import { IPost } from "@/database/models/post.model";
import { ITag } from "@/database/models/tag.model";

export interface CreateUserParams {
  email: string;
  password: string;
  fullname: string;
}
export interface CreateNewPostParams {
  post: Partial<IPost>;
}
export interface CreateNewTagParams {
  name: string;
  postId: Schema.Types.ObjectId;
}

export interface GetPostParams {
  page?: number;
  pageSize?: number;
  filter?: "knowledge" | "component" | "workflow" | string;
  searchQuery?: string;
}
export interface GetTagParams {
  page: number;
  pageSize: number;
  _id?: Schema.Types.ObjectId;
  name?: string;
}
export interface GetPostsParams {
  posts: IPost[];
}
export interface GetAllUsersParams {
  page?: number;
  pageSize?: number;
  filter?: string;
  searchQuery?: string; // Add searchQuery parameter
}
export interface GetTagByPostIdParams {
  postId: string;
  postType?: string;
}

export interface GetTagByNameParams {
  name: string;
}

export interface GetPostByQueryParams {
  query?: string;
  filter?: string;
  page?: number;
  pageSize?: number;
}

export interface SearchParams {
  query: string;
  type?: string | null;
}
export interface UpdatePostParams {
  _id: string;
  updateData: Partial<IPost>;
}
export interface UpdateTagParams {
  _id: string;
  updateData: Partial<ITag>;
}
export interface UpdateUserParams {
  updateData: Partial<IUser>;
}

export interface DeletePostParams {
  _id: string;
}
export interface DeleteUserParams {
  _id: string;
}
export interface DeleteTagParams {
  _id: string;
}
