const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:127.0.1:27017/miniproject');

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
});

mongoose.model('User', userSchema);