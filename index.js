const express = require("express");
const mongoose = require("mongoose");
const Product = require("./model/product.model");
const ProductRoutes = require("./routes/product.route");
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoutes);

const mongoURI =
  "mongodb+srv://abdulwahablawal2002:bAQGICJ7ooL9XOMy@backendbb.4y3yv.mongodb.net/?retryWrites=true&w=majority&appName=backendBb";

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
