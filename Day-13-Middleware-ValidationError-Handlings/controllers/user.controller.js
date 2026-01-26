exports.getUsers = (req, res) => {
    res.json({
        message: "Protected user list"
    });
};

exports.createUser = (req, res) => {
    res.status(201).json({
        message: "User created",
        data: req.body
    });
};
