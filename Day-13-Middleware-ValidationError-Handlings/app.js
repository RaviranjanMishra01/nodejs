const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middleware/error.middleware");

app.use("/",(req,res)=>{ 
    res.send("<h1>welcome to home page friends <a href='http://localhost:3000/users'>click here to go /users</a></h1>")
})

app.use("/users", userRoutes);
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
