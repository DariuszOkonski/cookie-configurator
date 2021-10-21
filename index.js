const express = require('express')
const {orderRouter} = require("./routes/order");
const {configuratorRouter} = require("./routes/configurator");
const {homeRouter} = require("./routes/home");

const cookieParser = require('cookie-parser');
const hbs = require('handlebars');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true,
}));
app.engine('.hbs', hbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/configurator', configuratorRouter);
app.use('/order', orderRouter);


app.listen(3000, 'localhost', () => {
    console.log('listening...');
})