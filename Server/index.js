
// This code creates a simple http server using node.js.



// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const logPath = path.join(__dirname, 'log.txt');

// const myServer = http.createServer((req, res)=>{
//     const myURL = new URL(req.url, `http://${req.headers.host}`);
//     const log = `${myURL.pathname} : new request received\n`;

//     fs.appendFile(logPath, log, (err) => {
//         if (err) {
//             console.error("Log write error:", err);
//         }

//         if (myURL.pathname === "/") {
//             res.end("<h1>Home Page</h1>");
//         } else if (myURL.pathname === "/about") {
//             res.end("<h1>About Page</h1>");
//         } else {
//             res.end("<h1>Page Not Found</h1>");
//         }
//     });
// });

// myServer.listen(8000, ()=>{
//     console.log("Server is listening on port 8000");
// });



// Thie code creates a simple http server using express.js framework.


const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>" + `Hello, ${req.query.name || "Guest"}!`);
});

app.get('/about', (req, res) => {
    res.send("<h1>About Page</h1>");
});

const myServer = http.createServer(app);

myServer.listen(8000, ()=>{
    console.log("Server is listening on port 8000");
});