const http = require("http");
const fs = require("fs")
const port = 3000;

http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        res.write(`
        <html>
        <body>
            <form action="/userdatafill" method="post">
                <input type="text" name="username" required placeholder="Name" />
                <input type="text" name="age" required placeholder="Age" />
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
        `);
        return res.end();
    }

    if (req.method === "POST" && req.url === "/userdatafill") {
        let body = "";
        req.on("data", chunk => body += chunk.toString())

        req.on("end", () => {
            const createnewobj = new URLSearchParams(body)
            const newobj = {}
            for (const [key, value] of createnewobj.entries()) {
                newobj[key] = value;
            }

            console.log(newobj)

            fs.writeFileSync("Formdata.txt", JSON.stringify(newobj));


            res.write("data is successfully send server please wait for next step")
            res.end()
        })

        return;
    }

    res.statusCode = 404;
    res.end("Route not found");

}).listen(port, () => console.log("Server started on port 3000"));
