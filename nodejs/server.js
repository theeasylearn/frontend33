const http = require("http");
const port = 3000;
// console.log(http);
const server = http.createServer((req, resp) => {
    console.log("req = ", req);
    console.log(resp);
    
    console.log("Done ");
});
// console.log(server);

server.listen(port);

// localhost:3000 

