
const getAllUsers = (req, res) => {
  res.status(200).json({ success: true, message: "User list" });
};

const userRegister = (req, res) => {

  res.status(201).json({ success: true, message: "User registered successfully!" });
};

const userLogin = (req, res) => {
  res.status(200).json({ success: true, message: "User logged in successfully!" });
};

module.exports = {
  getAllUsers,
  userRegister,
  userLogin,
};
