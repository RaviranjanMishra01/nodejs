// Server Using Named Function
const http = require("http");

function requestHandler(req, res) {
    res.end("Server with named function");
}

http.createServer(requestHandler).listen(3000);