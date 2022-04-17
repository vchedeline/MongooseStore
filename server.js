require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const productsController = require("./controllers/products");
const app = express();
const PORT = process.env.PORT || 8008;

// MONGOOSE CONFIGURATION
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Connect to MongoDB
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " MongoDB Err?"));
db.on("connected", () => console.log("MongoDB connected"));
db.on("disconnected", () => console.log("MongoDB Disconnected"));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/public", express.static("public"));
app.use(morgan("tiny"));
app.use("/products", productsController);

app.get("/", (req, res) => {
  res.render("main.ejs");
});

app.listen(PORT, () => {
  console.log(`Now listening on Port ${PORT}`);
});
