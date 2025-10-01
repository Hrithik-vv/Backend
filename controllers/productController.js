
const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("getAllProducts error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching products",
      error: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("getProductById error:", error);
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid product id",
        error: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Server error while fetching product",
      error: error.message,
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const { productName, productPrice, productDescription, productPhoto } = req.body;

    if (!productName || !productPrice || !productDescription || !productPhoto) {
      return res.status(400).json({
        success: false,
        message: "Please enter all required fields: productName, productPrice, productDescription, productPhoto",
      });
    }

    const product = await Product.create({
      productName,
      productPrice,
      productDescription,
      productPhoto,
    });

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.error("addProduct error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while adding product",
      error: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
};
