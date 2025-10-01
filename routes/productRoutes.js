
const express = require("express");
const {
  getAllProducts,
  getProductById,
  addProduct,
} = require("../controllers/productController");

const router = express.Router();

router.route("/").get(getAllProducts).post(addProduct);


module.exports = router;
