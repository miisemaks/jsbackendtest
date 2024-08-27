const express = require("express");
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log("Example app listening on port 3000");
});
