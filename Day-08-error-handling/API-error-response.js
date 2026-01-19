const http = require("http");

function errorHandler(res, error) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 500;
    res.end(JSON.stringify({
        success: false,
        message: error.message
    }));
}

http.createServer((req, res) => {
    try {
        if (req.url === "/api") {
            throw new Error("API failed");
        }
        res.end("OK");
    } catch (error) {
        errorHandler(res, error);
    }
}).listen(3000);
