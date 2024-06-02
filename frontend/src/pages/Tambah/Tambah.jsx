import React, { useState } from "react";
import axios from "axios";
import Input from "../../components/input/Input";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Tambah = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    status: false,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v2/produk",
        formData
      );
      console.log("Product added successfully:", response.data);
      navigate("/");
      // Handle success, maybe redirect or show a success message
    } catch (error) {
      console.error("Error adding product:", error);
      // Handle error, maybe show an error message
    }
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Nama Produk..."
            label="Nama"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="price"
            type="number"
            placeholder="Harga Produk..."
            label="Harga"
            value={formData.price}
            onChange={handleChange}
          />
          <Input
            name="stock"
            type="number"
            placeholder="Stock Produk..."
            label="Stock"
            value={formData.stock}
            onChange={handleChange}
          />
          <Input
            name="status"
            type="checkbox"
            label="Active"
            checked={formData.status}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tambah;
