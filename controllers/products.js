const express = require("express")
const productRouter = express.Router()

//Index
productRouter.get("/", (req, res) => {
  res.send("I AM INDEX")
})

//New
productRouter.get("/new", (req, res) => {
  res.send("I AM NEW")
})

//Delete
productRouter.delete("/:id", (req, res) => {
  res.send("I AM DELETE")
})

//Update
productRouter.put("/:id", (req, res) => {
  res.send("I AM UPDATE")
})

//create
productRouter.post("/", (req, res) => {
  res.send("I AM CREATE")
})

//Edit
productRouter.get("/:id/edit", (req, res) => {
  res.send("I AM EDIT")
})

//Show
productRouter.get("/:id", (req, res) => {
  res.send("I AM SHOW")
})


module.exports = productRouter
