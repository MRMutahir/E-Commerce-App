import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    adress: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

const order = mongoose.model("order", OrderSchema);
export default order;
let a  = "a"
