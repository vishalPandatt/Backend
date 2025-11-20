import express from 'express';

const app = express();

const port = 3000;


app.set('view engine', 'ejs');      // setting ejs as the view engine

app.get('/',(req, res)=>{
    res.render('home.ejs');              // rendering home.ejs file
})

app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
}); 
