const express = require('express');
const app = express();

// console.dir(app);   // to see all properties of express app


let port = 8080;            // exchange info between server and client

app.listen(port, () => {            //listen is used to start a server and incoming requests
    console.log(`Server is running on port ${port}`);
});


// app.use((req, res) => {      // middleware function to handle requests
//     console.log('Request received');
//     res.send('Hello from Express server');   // send response to client
// });

//Learning about routing in express
//with the help of routing we can handle different urls

app.get('/',  (req , res) =>{                          // handling GET request to root URL
    console.log('Request received at root path');
    res.send('Hello, You contected root path');
});

// app.get('/search',  (req , res) =>{ 
//     console.log('Request received at search path');
//     res.send('Hello, You contected search path');
// });

// app.get('/help',  (req , res) =>{
//     console.log('Request received at help path');
//     res.send('Hello, You contected help path');
// });

//handling 404 error page
// app.use((req, res) => {
//   res.status(404).send("Page Not Found");           //status method to set HTTP status code
// });

// app.post('/', (req, res) => {                               // handling POST request to root URL
//     console.log('POST request received at root path');  
//     res.send('Hello, You sent a POST request to root path');
// });

app.get('/:username/:id',(req, res)=>{           // route parameters
    console.log('username:', req.params, 'id:', req.params);    // Accessing route parameters
    res.send(`Hello, ${req.params.username}! your profile page.and your id is ${req.params.id}`);
});