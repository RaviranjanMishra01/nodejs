const http = require("http");

function logger(req, res, next) {
    console.log("Logger middleware");
    next();
}

function auth(req, res, next) {
    console.log("Auth middleware");
    next();
}

http.createServer((req, res) => {
    logger(req, res, () => {
        auth(req, res, () => {
            res.end("Multiple middleware executed");
        });
    });
}).listen(3000);
