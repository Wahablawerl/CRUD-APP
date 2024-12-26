const express = require("express");
const Product = require("../model/product.model");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.post(":/id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
