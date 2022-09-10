import mongoose from "mongoose";

const MessagesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    email: {
      type: String,
      required: true,
      maxlength: 60,
    },
    message: {
      type: String,
      required: true,
      maxlength: 60,
    },
    portfolioOwnerId: {
      type: mongoose.Schema.Types.ObjectId, ref: 'users'
    },
  },
  { timestamps: true }
);

export default mongoose.models.messages ||
  mongoose.model("messages", MessagesSchema);