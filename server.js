const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const handlebars = require('express-handlebars');

app.use('/public', express.static('public'))

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let router = require('./controllers/burgers_controller')

app.use(router);

app.listen(PORT, ()=> {
    console.log("listening on " + PORT)
})