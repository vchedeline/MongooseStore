const express = require("express");
const Product = require("../models/product");
const productSeed = require("../models/productSeed");
const productRouter = express.Router();

//Seed
productRouter.get("/seed", (req, res) => {
  Product.deleteMany({}, (error, deletedProducts) => {
    Product.create(productSeed, (err, data) => {
      res.redirect("/products");
    });
  });
});

//Index
productRouter.get("/", (req, res) => {
  Product.find({}, (err, products) => {
    res.render("index.ejs", { products });
  });
});

//New
productRouter.get("/new", (req, res) => {
  res.send("I AM NEW");
});

//Delete
productRouter.delete("/:id", (req, res) => {
  res.send("I AM DELETE");
});

//Update
productRouter.put("/:id", (req, res) => {
  res.send("I AM UPDATE");
});

//create
productRouter.post("/", (req, res) => {
  res.send("I AM CREATE");
});

//Edit
productRouter.get("/:id/edit", (req, res) => {
  res.send("I AM EDIT");
});

//Show
productRouter.get("/:id", (req, res) => {
  res.send("I AM SHOW");
});

module.exports = productRouter;
