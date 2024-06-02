// api/v2/routes.js
const express = require("express");
const router = express.Router();
const Produk = require("./controller");

router.post("/produk", Produk.addProduct);
router.put("/produk/:id", Produk.updateProduct);
router.delete("/produk/:id", Produk.deleteProduct);
router.get("/produk/:id", Produk.getDataById);
router.get("/produk", Produk.getData);

module.exports = router;
