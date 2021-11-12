const express = require('express');
const {COOKIE_BASES, COOKIE_ADDONS} = require("../data/cookies-data");
const {handlebarsHelpers} = require("../utils/handlebars-helpers");
const {getAddonsFromReq} = require("../utils/get-addons-from-req");

const homeRouter = express.Router();

homeRouter
    .get('/', (req, res) => {
        let { cookieBase } = req.cookies;

        const addons = getAddonsFromReq(req);

        const sum =
            (cookieBase ? handlebarsHelpers.findPrice(Object.entries(COOKIE_BASES), cookieBase) : 0)
            + addons.reduce((prev, curr) =>
                prev + handlebarsHelpers.findPrice(Object.entries(COOKIE_ADDONS), curr), 0
            );

        res.render('home/index', {
            cookie: {
                base: cookieBase,
                addons: addons,
            },
            bases: Object.entries(COOKIE_BASES),
            addons: Object.entries(COOKIE_ADDONS),
            sum,
        })
    })

module.exports = {
    homeRouter
}
