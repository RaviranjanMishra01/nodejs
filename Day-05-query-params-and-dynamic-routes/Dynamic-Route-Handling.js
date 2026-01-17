const http = require("http");

http.createServer((req, res) => {
    const path = req.url.split("/");

    if (path[1] === "user" && path[2]) {
        res.end(`User ID is ${path[2]}`);
    } else {
        res.statusCode = 404;
        res.end("Route not found");
    }
}).listen(3000);
