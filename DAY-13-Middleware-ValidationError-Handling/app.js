const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middleware/error.middleware");

app.use("/users", userRoutes);

/*
|--------------------------------------------------------------------------
| Global Error Middleware (Always last)
|--------------------------------------------------------------------------
*/
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
