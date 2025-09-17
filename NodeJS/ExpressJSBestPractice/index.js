const express = require('express');

// Import the route files
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000; // Use a number, not a string for the port

app.use(express.json());

// Use the routes
app.use("/user", userRoutes);
app.use("/product", productRoutes);

app.get("/", (req, res) => {
    res.send("Hi, server is UP!");
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});