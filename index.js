const express = require('express')
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');


const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.engine('.hbs', hbs({
    extname: '.hbs',
}));
app.set('view engine', '.hbs');


app.listen(3000, 'localhost', () => {
    console.log('listening...');
})
