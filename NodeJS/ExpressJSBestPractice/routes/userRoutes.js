const express = require('express')
const Router = express.Router();
const { showUser, addUser } = require('../controllers/userController')
Router.get("/", showUser)
Router.post("/", addUser)
module.exports = Router;