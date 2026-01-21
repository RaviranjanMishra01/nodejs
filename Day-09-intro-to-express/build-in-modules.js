const express = require("express");
const app = express();

app.use(express.json());

app.post("/user", (req, res) => {
    res.json({
        received: req.body
    });
});

app.listen(3000);
