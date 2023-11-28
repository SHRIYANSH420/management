import mongoose from "mongoose";

const { Schema } = mongoose;


const productSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        unique: true,
      },
      desc: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      stock: {
        type: Number,
        required: true,
        min: 0,
      },
      color: {
        type: String,
      },
      size: {
        type: String,
      },
    },
    { timestamps: true }
);

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
