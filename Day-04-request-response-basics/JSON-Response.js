const http = require("http");

http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify({
        success: true,
        message: "API response from Node.js"
    }));
}).listen(3000);
