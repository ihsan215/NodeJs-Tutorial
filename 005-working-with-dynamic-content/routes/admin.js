const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../util/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

// filter just POST request
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routers = router;
exports.products = products;
