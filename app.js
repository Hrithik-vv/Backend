const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);


app.get("/", (req, res) => {
  res.send("Running");
});

module.exports = app;
