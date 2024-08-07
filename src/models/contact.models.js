import mongoose, { Schema } from "mongoose";
const contactSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      message:{
        type: String,
        required: true,
      }
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema)
