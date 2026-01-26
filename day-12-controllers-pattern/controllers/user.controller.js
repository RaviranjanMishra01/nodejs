exports.getUsers = (req, res) => {
    res.json({
        message: "All users"
    });
};

exports.getUserById = (req, res) => {
    res.json({
        userId: req.params.id
    });
};

exports.createUser = (req, res) => {
    const user = req.body;

    res.status(201).json({
        message: "User created",
        data: user
    });
};
