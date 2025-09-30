const Product = require("../models/productModel");

const getAllProducts = (req, res) => {
  res.status(200).json({ success: true, message: "Product list" });
};


exports.addProduct = (req,res)=>{

 try {
  
 const {productName, prductPrice,productDescription,productPhoto}=req.body;
 if(!productName || !prductPrice || !productDescription || !productPhoto){
  return res.status(400).json({
    success:false,
    message:'Please enter all the data'
  })
 }

// const prodcut = await Product.create(req.body);

 } catch (error) {
  
 }


}


module.exports = { getAllProducts };


