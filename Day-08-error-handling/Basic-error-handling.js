const http = require("http");

http.createServer((req, res) => {
    try {
        if (req.url === "/error") {
            throw new Error("Something went wrong");
        }
        res.end("No error");
    } catch (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
    }
}).listen(3000);
