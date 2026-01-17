const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify({
        message: "Query params received",
        data: query
    }));
}).listen(3000);
