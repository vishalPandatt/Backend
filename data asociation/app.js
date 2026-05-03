const express = require('express');
const userModel = require('./models/user');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const app = express();
app.use(cookieParser());

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) =>{
    res.render('index');
});

app.post('/register', async (req, res) => {
    const {username, name, age, email, password} = req.body;

    const user = await userModel.findOne({email});
    if (user) {
        return res.status(400).send('User already exists');
    }

    const salt = await bcrypt.genSalt(10);          
    const hashedPassword = await bcrypt.hash(password, salt);  
    console.log(hashedPassword);

    const newUser = await userModel.create({
        username,
        name,
        age,
        email,
        password: hashedPassword,
        posts: [
            {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
        ]
    });

    res.send('User registered successfully');
});

app.listen(8080, () =>{
});

