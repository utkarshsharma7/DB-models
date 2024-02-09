import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // userName: String,
    // email: String,
    // isActive: Boolean,

    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Why no email?"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true, // [true, "password is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
