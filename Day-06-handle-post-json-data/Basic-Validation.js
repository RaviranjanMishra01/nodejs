const http = require("http");

http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/register") {
        let body = "";

        req.on("data", chunk => body += chunk);

        req.on("end", () => {
            const { name, email } = JSON.parse(body);

            if (!name || !email) {
                res.statusCode = 400;
                return res.end("Name and Email are required");
            }

            res.end("User registered successfully");
        });

        return;
    }

    res.statusCode = 404;
    res.end("Not Found");

}).listen(3000);
