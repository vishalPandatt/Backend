const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/auth");


const userSchema = mongoose.Schema({
    email:{type: String, required:true},
    password:{type: String, required:true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;