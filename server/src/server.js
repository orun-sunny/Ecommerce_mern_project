
const app = require('./app')
const { serverPort } = require('./secret')


app.listen(serverPort, () => {
    console.log(`server running at http://localhost:${serverPort}`);
});

