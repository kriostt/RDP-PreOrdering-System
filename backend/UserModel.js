const mongoose = require("mongoose");

const UserModelSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    phone: String,
    passwrod: String,
  },
  {
    collection: "User",
  }
);

mongoose.model("User", UserModelSchema);
