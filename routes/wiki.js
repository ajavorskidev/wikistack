const express = require('express');
const addPage = require('../views/addPage');
const layout = require('../views/layout')
const wikiRouter = express.Router();

wikiRouter.get('/', (req, res, next) => {
    res.send(layout(''));
});
wikiRouter.get('/add', (req, res, next) => {
    res.send(addPage());
    // res.send('POST Testing the add page');
});
wikiRouter.post('/', (req, res, next) => {
    res.send('GET Testing submitting page');
});

module.exports = wikiRouter;