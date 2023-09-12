import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
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
    img: {
      type: String,
      required: true,
    },
    Price: {
      required: true,
      type: Number,
    },
    categories: {
      type: Array,
    },
    color: {
      type: Array,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

const product = mongoose.model("product", ProductSchema);
export default product;
