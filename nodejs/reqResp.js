const http = require("http");
const port = 3000;

const server = http.createServer((req, resp) => {
    // console.log("req = ", req);
    // console.log("req.url = ", req.url);
    let url = req.url;
    resp.writeHead(200, { "content-type": "text/html" });

    if (url == '/' || url == "/home") {
        resp.write("<h1>Hello world </h1>");
    } else if (url == '/about') {
        resp.write("<h1>About page </h1>");
    } else if (url == '/contact') {
        resp.write("<h1>Contact page </h1>");
    }
    
    console.log("Done ");
    resp.end();
});


server.listen(port);
