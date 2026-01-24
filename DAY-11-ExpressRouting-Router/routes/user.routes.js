const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.json({
        message: "User list"
    });
});
router.get("/:id", (req, res) => {
    res.json({
        userId: req.params.id
    });
});
module.exports = router;
