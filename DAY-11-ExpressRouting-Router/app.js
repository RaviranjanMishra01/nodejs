const express = require("express");
const app = express();
app.use(express.json());
const indexRoutes = require("./routes/index.routes");
const userRoutes = require("./routes/user.routes");
app.use("/", indexRoutes);
app.use("/users", userRoutes);
app.listen(3000, () => {
    console.log("Express server running on port 3000");
});
