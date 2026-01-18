const http = require("http");

function auth(req, res, next) {
    const isAuthorized = req.headers.authorization === "Bearer 12345";

    if (!isAuthorized) {
        res.statusCode = 401;
        return res.end("Unauthorized");
    }

    next();
}

http.createServer((req, res) => {

    if (req.url === "/dashboard") {
        auth(req, res, () => {
            res.end("Welcome to Dashboard");
        });
        return;
    }

    res.end("Public Route");

}).listen(3000);
