const mongoose =require("mongoose");

const productSchema =new mongoose.Schema({
    productName:{
        type:String,
        required:[true, 'Please  enter product name']
    },
    productPrice:{
        type:Number,
        required:[true,'Please enter prodcut price']
    },
    productDescription:{
        type:String,
        required:[true, 'Please  enter product Desription']
    },
    productPhoto:{
        type:String,
        required:[true, 'Please  add photo']
    }
});

const Product =mongoose.model("Prodcut",productSchema);

module.exports =Product;