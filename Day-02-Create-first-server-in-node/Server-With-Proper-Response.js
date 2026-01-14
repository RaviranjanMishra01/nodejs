// Server With Proper Response

const http = require("http");

http.createServer((req, res) => {
    res.write("Hello from Node Server");
    res.end();
}).listen(3000);