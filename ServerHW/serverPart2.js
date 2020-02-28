const http = require("http");

// edited and added "localhost:8080/about" you server a html web page.

const server = http.createServer((req,res) => {
    if (req.url === '/about')
   
        res.write("<h1>Hello, World!</h1>");
        res.end();
    })
   
server.listen(8080);
console.log("basic server setup");