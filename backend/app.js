// app.js
require("dotenv").config();
const express = require("express");
const app = express();
// Koneksi database menggunakan mongodb native
// const { connectDB } = require("./config/database");
// Koneksi database menggunakan odm mongoose
const DBconnect = require("./config/dbmongose");
const port = 3000;
const v1Routes = require("./api/v1/routes");
const v2Routes = require("./api/v2/routes");
const cors = require("cors"); // Import cors

app.use(cors());
app.use(express.json());
app.use("/api/v1", v1Routes);
app.use("/api/v2", v2Routes);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Memanggil koneksi mongo DB native
// connectDB();
DBconnect();
