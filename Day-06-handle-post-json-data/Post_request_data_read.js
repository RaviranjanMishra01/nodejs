const http = require("http");

http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/user") {
        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const data = JSON.parse(body);

            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                success: true,
                receivedData: data
            }));
        });

        return;
    }

    res.statusCode = 404;
    res.end("Route not found");

}).listen(3000, () => {
    console.log("Server running on port 3000");
});
