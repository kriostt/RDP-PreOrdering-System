// imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const bcrypt = require("bcryptjs"); // for hashing passwords
const jwt = require("jsonwebtoken");

const mongoUrl =
  "mongodb+srv://kriostt:2321@cluster0.8zj54ks.mongodb.net/PreOrderApp";

const JWT_SECRET = "secretkey123";

// connect to mongoDB
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  });

require("./UserModel");

const User = mongoose.model("User");

app.get("/", (req, res) => {
  res.send({ status: "Started" });
});

app.post("/register", async (req, res) => {
  const { username, email, phone, password } = req.body;

  const oldUser = await User.findOne({ email: email });
  if (oldUser) {
    return res.send("User already exists.");
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      username: username,
      email: email,
      phone: phone,
      password: encryptedPassword,
    });
    res.send({ status: "ok", data: "User Created" });
  } catch (error) {
    res.send({ status: "error", data: error });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const oldUser = await User.findOne({ email: email });

  if (!oldUser) {
    return res.send({ data: "User doesn't exist." });
  }

  if (await bcrypt.compare(password, oldUser.password)) {
    const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.send({ status: "ok", data: token });
    } else {
      return res.send({ error: "error" });
    }
  }
});

app.post("/get-user", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userEmail = user.email;

    User.findOne({ email: userEmail }).then((data) => {
      return res.send({ status: "ok", data: data });
    });
  } catch (error) {
    return res.send({ error: error });
  }
});

app.listen(3001, () => {
  console.log("Node js server started.");
});
