const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "vishal",
        content: "This is my first post"
    },
    {
        username: "Sharma Ji",
        content: "This is my class"
    },
    {
        username: "Pandit Ji",
        content: "This is my code"
    }
];

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/posts', (req, res) => {
    res.render('index', { posts: posts });
});

app.get('/posts/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect('/posts');
});