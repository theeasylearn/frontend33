const { createServer } = require("http");
const { readFileSync } = require("fs");
const url = require("url");

const port = 5000;

const server = createServer((req, resp) => {
    console.log("url = ", req.url);

    const myUrl = url.parse(req.url);

    let fileName = "." + (myUrl.pathname == "/" ? "/index.html" : myUrl.pathname);
    
    if (fileName !== "./favicon.ico") {
        console.log(fileName);        
    }

    resp.end();
});

server.listen(port);

// * ----------------------

// const { createServer } = require("http");
// const url = require("url");

// const port = 5000;

// const server = createServer((req, resp) => {
//     console.log("url = ", req.url);

//     const myUrl = url.parse(req.url);
//     let fileName = "." + (myUrl.pathname === "/" ? "/index.html" : myUrl.pathname);

//     // Check if the request is not for the favicon
//     if (fileName !== "./favicon.ico") {
//         console.log("filename = ", fileName);
//     }

//     resp.end();
// });

// server.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
