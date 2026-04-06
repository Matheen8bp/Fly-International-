import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: String,
  price: Number,
  duration: String,
  description: String,
  image: String
}, { timestamps: true });

export default mongoose.model("Package", packageSchema);
