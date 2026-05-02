const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/miniproject').catch(console.error);

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema);