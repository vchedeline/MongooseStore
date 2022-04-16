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
  res.render("new.ejs");
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
  Product.create(req.body, (err, newProduct) => {
    if (err) return res.send(err);
    res.redirect("/products");
  });
});

//Edit
productRouter.get("/:id/edit", (req, res) => {
  res.send("I AM EDIT");
});

//Show
productRouter.get("/:id", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    res.render("show.ejs", { product });
  });
});

module.exports = productRouter;
