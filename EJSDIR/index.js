const express = require('express');
const path = require('path');           // to work with file and directory paths, path use when we run our server from different location    


const app = express();

const port = 3000;

app.set('views', path.join(__dirname, "views"));        // setting the views directory

app.set('view engine', 'ejs');      // setting ejs as the view engine

app.get('/',(req, res)=>{
    res.render('home');              // rendering home.ejs file which is present in views folder
})

app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
}); 


