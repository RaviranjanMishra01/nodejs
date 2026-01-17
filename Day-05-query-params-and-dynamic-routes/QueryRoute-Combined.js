const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathParts = parsedUrl.pathname.split("/");
    const query = parsedUrl.query;

    if (pathParts[1] === "product" && pathParts[2]) {
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify({
            productId: pathParts[2],
            filters: query
        }));
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
}).listen(3000);
