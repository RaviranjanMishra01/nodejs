const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const validate = require("../middleware/validate.middleware");
const userController = require("../controllers/user.controller");

router.get("/", auth, userController.getUsers);
router.post("/", validate, userController.createUser);

module.exports = router;
