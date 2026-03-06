const express = require("express");
const app = express();
const port = 8080;
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

let users = [
    {
        name : "pawan kumar",
        email : "pawan@example.com",
        password : "password123"
    },
    {
        name : "john doe",
        email : "john@example.com",
        password : "password456"
    }
];

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/home", (req, res) => {
    res.send("home");
});

app.get("/data", (req, res) => {
    res.render("data", { users: users });
});

app.post("/data", (req, res) => {
    const { name, email, password } = req.body;
    users.push({ name, email, password });
    res.redirect("/home");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 