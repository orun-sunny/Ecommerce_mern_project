const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser')
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ express: true }));

const isLoggedIn = (req, res, next) => {
    const login = false;
    if (login) {
        req.body.id = 101;
        next();
    } else {
        return res.status(401).json({ message: 'please login first' });
    }
};
app.get("/test", (req, res) => {
    res.status(200).send({ message: 'post: api testing is working' });
});
app.get("/api/user", isLoggedIn, (req, res) => {
    console.log(req.body.id);
    res.status(200).send({ message: 'get: user profile returned' });
});

app.get("/products", (req, res) => {
    res.send('products are returned');
});
// client error handeling
app.use((req, res, next) => {
    res.status(404).json({ message: 'route not found' })
    next();
})
// server error handeling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('somthing fishy')
})


app.listen(3001, () => {
    console.log(`server running at http://localhost:3001`);
});

