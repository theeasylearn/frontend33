const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, resp) => {
    resp.writeHead(200, { "content-type": "text/html" });
    
    fs.readFile("toRead.html", 'utf8', (err, content) => {
        if (err) {
            console.error(err);
        } else {
            resp.write(content);
            console.log(content);
            // window.navigator.clipboard.writeText(content);
        }
        console.log("File read");
    });
    
    console.log("Done ");
    resp.end();
});
server.listen(port);


