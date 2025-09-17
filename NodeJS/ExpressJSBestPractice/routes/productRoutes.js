const express = require('express')
const Router = express.Router();
const { showProduct, addProduct } = require('../controllers/productController')
Router.get("/", showProduct)
Router.post("/", addProduct)
module.exports = Router;