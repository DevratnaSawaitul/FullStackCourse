const express = require('express')
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("this is template engine")
})

// sending json res
app.get("/status", (req, res) => {
    res.json({ 'status': '200', 'working': 'true' })
})
// npm i pug
app.set('view engine', 'ejs');
app.get('/user/:username', (req, res) => {
    // res.sendFile(__direname+'index.html')
    res.render('index', { title: 'User Page', msg: `welcome user ${req.params.username}` });
})

app.listen(port, () => {
    console.log("Starting server")
})