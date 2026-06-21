const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.use(function(req, res, next){
    console.log("midddleware is running");
    next(); 
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/profile', (req,res) =>{
    res.send("This is the profile page");
});
app.get('/profile/:username', (req,res) =>{
    res.send(`Welcome to the profile page username: ${req.params.username}`);
});


app.listen(8000, ()=>{
    console.log("server is running on port 8000")
});