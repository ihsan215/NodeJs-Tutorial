const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../util/path");

router.use("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// filter just POST request
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
