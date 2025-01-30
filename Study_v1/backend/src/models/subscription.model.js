// External Import
import mongoose, { Schema } from "mongoose";

// Schema
const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Export Schema
export const Subscription = mongoose.model("Subscription", subscriptionSchema);
