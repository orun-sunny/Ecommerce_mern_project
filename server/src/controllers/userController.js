const createError = require('http-errors');
const users = [
    { id: 1, name: 'orun sunny' },
    { id: 2, name: 'rabbe' },
    { id: 3, name: 'soccho' },
    { id: 4, name: 'ashik' },
];

const getUsers = (req, res, next) => {
    // console.log(req.body.id);
    try {
        res.status(200).send({
            message: 'get: user profile returned',
            users: users,
        });
    } catch (error) {
        next(error)

    }
};

module.exports = { getUsers };
