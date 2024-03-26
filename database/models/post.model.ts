import { Schema, Document, model, models } from "mongoose";

export interface IPost extends Document {
  _id: Schema.Types.ObjectId;
  title: string;
  body: string;
  author: Schema.Types.ObjectId;
  postType: {
    knowledge: string;
    workflows: string;
    components: string;
  };
  tags: Schema.Types.ObjectId[];
  resourceLink: {
    label: string;
    url: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
const ResourceSchema = new Schema({
  knowledge: {
    type: String,
    required: true,
  },
  workflows: {
    type: String,
    required: true,
  },
  components: {
    type: String,
    required: true,
  },
});

const PostSchema = new Schema({
  postType: {
    type: ResourceSchema,
    required: true,
  },

  title: {
    type: String,
    required: false,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  resourceLink: {
    label: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
  },
  tags: [
    {
      type: [Schema.Types.ObjectId],
      ref: "Tag",
      required: true,
    },
  ],
});

export default models?.Post || model<IPost>("Post", PostSchema);
