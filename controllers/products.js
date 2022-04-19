const express = require("express");
const Product = require("../models/product");
const productSeed = require("../models/productSeed");
const productRouter = express.Router();

//Seed
productRouter.get("/seed", (req, res) => {
  Product.deleteMany({}, (error, deletedProducts) => {
    Product.create(productSeed, (err, data) => {
      if (err) return res.send(err);
      res.redirect("/products");
    });
  });
});

//Index
productRouter.get("/", (req, res) => {
  Product.find({}, (err, products) => {
    if (err) return res.send(err);
    res.render("index.ejs", { products });
  });
});

//New
productRouter.get("/new", (req, res) => {
  res.render("new.ejs");
});

//Delete
productRouter.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
    if (err) return res.send(err);
    res.redirect("/products");
  });
});

//Update
productRouter.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
    if (err) return res.send(err);
    res.redirect(`/products/${req.params.id}`);
  });
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
  Product.findById(req.params.id, (err, product) => {
    if (err) return res.send(err);
    res.render("edit.ejs", { product });
  });
});

//Show
productRouter.get("/:id", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) return res.send(err);
    res.render("show.ejs", { product });
  });
});

//Clicked
productRouter.put("/clicked", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body.qty, (err, updatedProductAmount) => {
    if (err) return res.send(err);
    res.redirect(`/products/${req.params.id}`);
  });
})

module.exports = productRouter;
