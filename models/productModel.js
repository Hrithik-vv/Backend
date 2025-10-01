const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Please enter product name"],
  },
  productPrice: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  productDescription: {
    type: String,
    required: [true, "Please enter product description"],
  },
  productPhoto: {
    type: String,
    required: [true, "Please add product photo"],
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
