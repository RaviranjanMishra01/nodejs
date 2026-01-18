const http = require("http");

function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

http.createServer((req, res) => {

    logger(req, res, () => {
        res.end("Request logged");
    });

}).listen(3000, () => {
    console.log("Server running on port 3000");
});
