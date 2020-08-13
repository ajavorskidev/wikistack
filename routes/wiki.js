const express = require('express');
const addPage = require('../views/addPage');
const wikiRouter = express.Router();

wikiRouter.get('/', (req, res, next) => {
    res.send(' GET Testing root')
});
wikiRouter.get('/add', (req, res, next) => {
    res.send(addPage());
    // res.send('POST Testing the add page');
});
wikiRouter.post('/', (req, res, next) => {
    res.send('GET Testing submitting page');
});

module.exports = wikiRouter;