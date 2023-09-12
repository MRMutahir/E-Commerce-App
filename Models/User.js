import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    useremail: {
      type: String,
      required: true,
      unique: true,
    },
    userpassword: {
      required: true,
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", UserSchema);
export default user;
