const bcrypt = require("bcryptjs"); // import bcrypt for password hashing
const jwt = require("jsonwebtoken"); // import jsonwebtoken for token generation
const createError = require("./appError"); // import custom error utility
const sanity = require("./server");

// register user
exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // check if a user with the same email already exists in Sanity
    const existingUser = await sanity.fetch(
      '*[_type == "user" && email == $email][0]',
      { email }
    );

    // if user already exists, return error
    if (existingUser) {
      return next(new createError("User already exists", 400));
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    // save the user data in Sanity
    await sanity.create({
      _type: "user",
      username,
      email,
      password: hashedPassword,
    });

    // generate JWT token
    const token = jwt.sign({ username, email }, "secretkey123", {
      expiresIn: "1h",
    });

    // send response with token
    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    next(error); // forward error to error handling middleware
  }
};

// login user
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // retrieve user data from Sanity
    const user = await sanity.fetch(
      '*[_type == "user" && email == $email][0]',
      { email }
    );

    // if user not found, return error
    if (!user) {
      return next(new createError("User not found"), 500);
    }

    // validate password
    const isPasswordValid = await bcrypt.compare(password, user.data.password);

    // if password is invalid, return error
    if (!isPasswordValid) {
      return next(new createError("Invalid password", 401));
    }

    // generate JWT token
    const token = jwt.sign({ username, email }, "secretkey123", {
      expiresIn: "1h",
    });

    // send response with token
    res.status(201).json({
      status: "success",
      message: "Logged in successfully",
      token,
    });
  } catch (error) {
    console.error(error);
    next(error); // forward error to error handling middleware
  }
};
