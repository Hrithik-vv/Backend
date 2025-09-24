
const getAllProducts = (req, res) => {
  res.status(200).json({ success: true, message: "Product list" });
};

module.exports = { getAllProducts };
