const express = require("express");
const app = express();

// function sampleMiddleware(req, res, next) {
//   console.log("sampleMiddleware invoked");
//   next();
// }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");



app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);


app.get("/all", (req, res) => {
  res.send("all user");
});

app.get("/", (req, res) => {
  res.send("Running");
});


app.use((err, req, res, next) => {
  res.status(500).send(err.message); 
});

module.exports = app;
