// Create basic Server

const http = require("http");

const server = http.createServer((req,res) => {
   // Place h1 tags around "Hello, World!".
        res.write("<h1>Hello, World!</h1>");
        res.end();
    })
   
server.listen(2000);
console.log("basic server setup");