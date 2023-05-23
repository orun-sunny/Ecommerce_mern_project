const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send('welcome to server');
});
app.get("/products", (req, res) => {
    res.send('products are returned');
});

app.listen(3001, () => {
    console.log(`server running at http://localhost:3001`);
});