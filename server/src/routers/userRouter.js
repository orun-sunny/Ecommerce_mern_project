const express = require('express');
const { getUsers } = require('../controllers/userController');
// const { use } = require('../app');
const userRouter = express.Router();

userRouter.get('/', getUsers)
module.exports = userRouter;

