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

app.post("/create", (req, res) => {
    let {email, password} = req.body;

    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(password, salt, async (err, hash)=>{
            let createdUser = await userModel.create({
            email: email,
            password: hash
          });
            res.send(createdUser);
            console.log(password);
         });
       });
    });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});