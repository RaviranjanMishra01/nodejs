const http = require("http");

http.createServer((req, res) => {
    console.log("URL:", req.url);
    console.log("Method:", req.method);
    console.log("Headers:", req.headers);

    res.end("Request logged");
}).listen(3000);
