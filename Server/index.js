const http = require('http');

const fs = require('fs');

const myServer = http.createServer((req, res)=>{
    if (req.url === "/favicon.ico") return res.end();
    const log = `${req.url} : new request received\n`;
    fs.appendFile('log.txt', log, (err, data)=>{
        switch(req.url){
            case "/":
                res.end("<h1>Home Page</h1>");
                break;
            case "/about":
                res.end("<h1>About Page</h1>");
                break;  
            default:
                res.end("<h1>Page Not Found</h1>");
        }
    });
    
});

myServer.listen(8000, ()=>{
    console.log("Server is listening on port 8000");
}); 
