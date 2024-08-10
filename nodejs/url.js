const http = require('http');
const url = require("url");
const port = 3000;

const server = http.createServer((req, resp) => {
    // const localhost = "https://geeksforgeeks.org/:3000/p/a/t/h?query=string#hash";
    const localhost = "https://geeksforgeeks.org/:3000/product?name=mobile&price=1000";

    // method 1 
    const myUrl = new URL(localhost);
    console.log(myUrl.href);
    
    
    // method 2 
    const myUrl2 = url.parse(localhost, true);
    console.log(myUrl2);
    console.log(myUrl2.query);
    
    
    console.log('Done ');
    resp.end()
}); 

server.listen(port);
