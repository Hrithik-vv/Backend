
const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/all", (req, res) => {
  res.send("All users endpoint");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});

module.exports = app;
