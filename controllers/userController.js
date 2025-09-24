const User = require("../models/userModel");

const getAllUsers = (req, res) => {
  res.status(200).json({ success: true, message: "User list" });
};

const userRegister = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    res.send(user);
  } catch (error) {
    res.send(error.stack);
  }
};

const userLogin = (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "User logged in successfully!" });
};

module.exports = {
  getAllUsers,
  userRegister,
  userLogin,
};
