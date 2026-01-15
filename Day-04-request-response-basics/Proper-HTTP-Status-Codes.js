const http = require("http");

http.createServer((req, res) => {
    if (req.url === "/") {
        res.statusCode = 200;
        res.end("Home Page");
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
}).listen(3000);
