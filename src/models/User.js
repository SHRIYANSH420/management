import mongoose from "mongoose";

const { Schema } = mongoose;

// Create a Mongoose Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name field is required."],
      minLength: [2, "Name must be 2 character long."],
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
    resetToken: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
