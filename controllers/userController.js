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


exports.getAllUsers = async(req,res)=>{

  try {
    const users =await User.find()
    if(!users){
      res.json({
        success:false,
        message:"Users not found!"
      })
    }
    res.json({
      success:true,
      users
    })

  } catch (error) {
      res.json({
        success:false,
        message:error.message
      })
  }
}







module.exports = {
  getAllUsers,
  userRegister,
  userLogin,
};
