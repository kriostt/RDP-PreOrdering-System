const mongoose = require("mongoose");

const UserModelSchema = new mongoose.Schema(
  {
    username: String,
    email: { type: String, unique: true },
    phone: String,
    password: String,
  },
  {
    collection: "User",
  }
);

mongoose.model("User", UserModelSchema);
