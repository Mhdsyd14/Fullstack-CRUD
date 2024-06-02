const { getDB } = require("../../config/database");
const { ObjectId } = require("mongodb");

const getData = async (req, res) => {
  try {
    const db = getDB();
    const productsCollection = db.collection("products");
    const products = await productsCollection.find({}).toArray();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createProducts = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const db = getDB();
    const productsCollection = db.collection("products");
    const result = await productsCollection.insertOne({ name, price, stock });
    res.status(201).json({
      message: "berhasil",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "gagal",
      data: error.message,
    });
  }
};

const updateProducts = async (req, res) => {
  try {
    const productId = req.params.id; // Ambil ID produk dari parameter URL
    const { name, price, stock } = req.body; // Ambil data produk yang akan diupdate dari body request

    const db = getDB();
    const productsCollection = db.collection("products");

    const id = new ObjectId(productId);

    // Lakukan pembaruan data produk
    const result = await productsCollection.updateOne(
      { _id: id }, // Filter berdasarkan ID produk
      { $set: { name, price, stock } } // Data baru untuk diupdate
    );

    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    const updatedProduct = await productsCollection.findOne({
      _id: new ObjectId(productId),
    });

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const productId = req.params.id;

    const db = getDB();
    const productsCollection = db.collection("products");

    const result = await productsCollection.deleteOne({
      _id: new ObjectId(productId),
    });

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getData,
  createProducts,
  updateProducts,
  deleteProducts,
};
