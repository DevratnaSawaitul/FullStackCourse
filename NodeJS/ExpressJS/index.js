const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// example for template Engine
app.get("/file", (req, res) => {
  // res.sendFile('index.html'); not work as we need absolute path
  res.sendFile(__dirname + "/index.html");
});

// passing data in files
app.set('view engine', 'pug')
app.get('/data', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => {
  console.log("app is active and listening");
});
