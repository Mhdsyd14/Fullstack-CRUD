// api/v1/routes.js
const express = require("express");
const router = express.Router();
const products = require("./controller");

router.get("/products", products.getData);
router.post("/products", products.createProducts);
router.put("/products/:id", products.updateProducts);
router.delete("/products/:id", products.deleteProducts);

module.exports = router;
