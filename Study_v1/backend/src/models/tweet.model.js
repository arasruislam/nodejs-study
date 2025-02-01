// External Import
import mongoose, { Schema } from "mongoose";

// Schema
const tweetSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Export
export const Tweet = mongoose.model("Tweet", tweetSchema);
