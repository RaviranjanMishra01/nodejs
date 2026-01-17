const http = require("http");

http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/login") {
        let body = "";

        req.on("data", chunk => body += chunk);

        req.on("end", () => {
            const { username, password } = JSON.parse(body);

            res.setHeader("Content-Type", "application/json");

            if (username === "admin" && password === "1234") {
                res.statusCode = 200;
                res.end(JSON.stringify({ message: "Login successful" }));
            } else {
                res.statusCode = 401;
                res.end(JSON.stringify({ message: "Invalid credentials" }));
            }
        });

        return;
    }

    res.statusCode = 404;
    res.end("Route not found");

}).listen(3000);
