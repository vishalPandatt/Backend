const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'));

let posts = [
    {
        id: uuidv4(),
        username: "vishal",
        content: "This is my first post"
    },
    {
        id: uuidv4(),
        username: "Sharma Ji",
        content: "This is my class"
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    res.render('show.ejs', { post });
});

app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => p.id === id);
    
    if (!post) {
        return res.status(404).send("Post not found");
    }
    
    post.content = newContent;
    console.log(id);
    res.redirect('/posts');
});

app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === id);
    res.render('edit.ejs', { post });
});

app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect('/posts');
});