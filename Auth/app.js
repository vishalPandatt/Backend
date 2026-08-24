const express = require('express');
const app = express();

const bcrypt = require("bcrypt");
const path = require("path");
const cookieParser = require("cookie-parser");
const userModel = require("./models/users");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/create", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Generate salt
        const salt = await bcrypt.genSalt(10);

        // Hash password
        const hash = await bcrypt.hash(password, salt);

        console.log(hash);

        // Create user with hashed password
        const createdUser = await userModel.create({
            email,
            password: hash
        });

        res.send(createdUser);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error creating user");
    }
    console.log(password);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});