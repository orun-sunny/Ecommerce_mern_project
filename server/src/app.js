const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const createError = require('http-errors');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const userRouter = require("./routers/userRouter");


const app = express();

const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,//1min
    max: 5,
    message: 'Too many request from this IP',
});
app.use(rateLimiter);
app.use(xssClean());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ express: true }));


app.use('/api/users', userRouter);

app.get("/test", rateLimiter, (req, res) => {
    res.status(200).send({ message: ' api testing is working' });
});



app.get("/products", (req, res) => {
    res.send('products are returned');
});
// client error handeling
app.use((req, res, next) => {


    next(createError(404, 'route not found'));
})
// server error handeling
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        success: false,
        message: err.message,
    });
    // res.status(500).send('somthing fishy')
})


module.exports = app;

