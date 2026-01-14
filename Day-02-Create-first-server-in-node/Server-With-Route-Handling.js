// Server With Route Handling
const http = require("http");

http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page");
    } else if (req.url === "/about") {
        res.end("About Page");
    } else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
}).listen(3000);