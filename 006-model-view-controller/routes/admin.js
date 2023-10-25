const path = require("path");
const express = require("express");
const router = express.Router();

const productsController = require("../controllers/product");

router.get("/add-product", productsController.getAddProduct);

// filter just POST request
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
