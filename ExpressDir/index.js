const express = require('express');
const app = express();

// console.dir(app);   // to see all properties of express app


let port = 3000;            // exchange info between server and client

app.listen(port, () => {            //listen is used to start a server and incoming requests
    console.log(`Server is running on port ${port}`);
});
