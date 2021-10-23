const {COOKIE_BASES, COOKIE_ADDONS} = require("../data/cookies-data");

const express = require('express');

const homeRouter = express.Router();

homeRouter
    .get('/', (req, res) => {

        res.render('home/index', {
            cookie: {
                base: 'light',
                addons: ['coconut', 'honey'],
            },
            bases: Object.entries(COOKIE_BASES),
            addons: Object.entries(COOKIE_ADDONS),

        });
    })

module.exports = {
    homeRouter
}