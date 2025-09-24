const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:[true,"Please enter fullname"],
        minlength:[2, "Fullname should contain min 2 characters"]
    },
    email:{
        type:String,
        required:[true,"Please enter email"],
    },
    password:{
        type:String,
        required:[true,"Please enter Password"],
        minlength:[2,"Password should conatain min 2 characters"]
    }
})