const express = require('express');
const app = express();
const bcrypt = require("bcrypt");

// app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.cookie("name","Vishal");
//     res.send('Cookie set!');
//     console.log(req.cookies);
// });

// app.get('/getcookie', (req, res) => {
//     console.log(req.cookies);
// });


// app.get('/', (req, res) => {
//     console.log(req.cookies);
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("mypassword", salt, function(err, hash) {
//         console.log(hash);
//     });
// });
// });


app.listen(3000);