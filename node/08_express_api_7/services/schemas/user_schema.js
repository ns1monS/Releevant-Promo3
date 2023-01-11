import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  password: String,
  role: String,
  address: String,
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
