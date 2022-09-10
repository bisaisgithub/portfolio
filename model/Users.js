import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      maxlength: 60,
      trim: true,
      required: [true, "Please add a email"],
    },
    name: {
      type: String,
      required: true,
      maxlength: 60,
      required: [true, "Please add a name"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      trim: true,
    },
    status: String
  },
  { timestamps: true }
);

export default mongoose.models.users ||
  mongoose.model("users", UsersSchema);