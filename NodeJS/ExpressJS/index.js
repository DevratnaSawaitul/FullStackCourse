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
app.set("view engine", "pug");
app.get("/data", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(port, () => {
  console.log("app is active and listening");
});

// middle wear use this we can before execution of getter block
const outMiddleWear = (res, req, next) => {
  console.log("we are in middle wear");
  next();
};

app.get("/middlewearuse", outMiddleWear, (req, res) => {
  res.send("this is middlewear getter");
});

// static files like we used css in html is not allowed in express so we used express.static to add propeties
app.use(express.static("public")); // defined folder where static files will be added in application

// using query params
app.get("/queryExample", (req, res) => {
  console.log(req.query);
  let str = "";
  // if gender filter in applied we will show it is res
  if (req.query.gender != null) {
    str = `this is gender for: ${req.query.gender}`;
  } else {
    str = "there is no gender";
  }
  res.send(str);
});

// string param example
app.get('/user/:username', (req, res) => {
  res.send(`this is username ${req.params.username}`);
});