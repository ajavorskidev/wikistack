const express = require('express');
const morgan = require('morgan');
const { db, Page, User } = require('./models');
const userRouter = require('./routes/users');
const layout = require('./views/layout')
const wikiRouter = require('./routes/wiki');


/* Initialize and authenticate the express app client and seqeulize db client */
const app = express();
/* Database */
db.authenticate().then(() => {
    console.log('CONNECTED TO DATABASE');
})

/* Middleware */
app.use(morgan('dev')); // To be able to console.log the statuses of requests
app.use(express.static(__dirname + '/public' )); // Provides a way to process a request for information
app.use(express.urlencoded({ extended: false })); // Parses the body of a request for easier prcoessing in code
/* *Routers* */
app.use('/wiki/', wikiRouter);
app.use('/user/', userRouter);

app.get('/', (req, res) => {
    const data = layout('');
    res.send(data);
});

const init = async () => {
    // await Page.sync();
    // await User.sync();
    db.sync(); // Add {force: true} inside .sync() if I need to sync a new table: WARNING: WILL CLEAR AND MAKE NEW TABLES IN DATABASE

    app.listen(1337, () => {
        console.log('Listening to port: ', 1337)
    });
}


/* Functions Run List */
init();