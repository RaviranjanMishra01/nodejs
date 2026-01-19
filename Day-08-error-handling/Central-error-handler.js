const http = require("http");

function errorHandler(res, error) {
    console.error(error.message);
    res.statusCode = 500;
    res.end("Server Error");
}

http.createServer((req, res) => {
    try {
        if (req.url === "/crash") {
            JSON.parse("{invalid json}");
        }
        res.end("Working fine");
    } catch (error) {
        errorHandler(res, error);
    }
}).listen(3000);
