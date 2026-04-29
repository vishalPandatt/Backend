const express = require('express');
const userModel = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookie-parser());

app.get('/', (req, res) =>{
    res.render('index');
});

app.listen(8080, () =>{});

