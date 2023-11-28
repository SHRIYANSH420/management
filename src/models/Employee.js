import mongoose from "mongoose";

const { Schema } = mongoose;

const employeeSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      workId: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
      isActive: {
        type: Boolean,
        default: true,
      },
      phone: {
        type: String,
      },
      address: {
        type: String,
      },
    },
    { timestamps: true }
  );
  
  export const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeSchema);