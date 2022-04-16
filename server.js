require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const productsController = require("./controllers/products");
const app = express();
const PORT = process.env.PORT || 8008;

// MiddleWare
app.use(express.urlencoded({ extended: true }));
app.use("/products", productsController);

app.listen(PORT, () => {
  console.log(`Now listening on Port ${PORT}`);
});
