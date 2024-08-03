const http = require("http");
const port = 3000;

const server = http.createServer((req, resp) => {
    let url = req.url;
    resp.writeHead(200, { "content-type": "text/html" });

    if (url === "/about") {
        let data = {
            albumId: 1,
            id: 18,
            title: "laboriosam odit nam necessitatibus et illum dolores reiciendis",
            url: "https://via.placeholder.com/600/1fe46f",
            thumbnailUrl: "https://via.placeholder.com/150/1fe46f",
        };
        let ans = JSON.stringify(data);
        // console.log(ans);
        resp.write(`
            <style>
                * {
                    font-size: 1rem;
                }
            </style>
            `)
        resp.write(`<h1 style="color: blue;"> ${data.title} </h1>`);
        resp.write(`<img src='${data.url}' alt="asdf" />`);
        // resp.write(ans);
        resp.end();
    }
});
server.listen(port);
