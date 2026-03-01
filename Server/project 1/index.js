
// const express = require('express');
// const users = require("./MOCK_DATA.json");
// const app = express();
// const PORT = 8000;

// app.use(express.urlencoded({extended: false}));

// app.get("/api/users", (req, res)=>{
//     return res.json(users);
// });

// app.get("/users", (req, res)=>{
//     const HTML =  `
//     <ul>
//     ${users.map(user => `<li>${user.first_name}</li>`).join("")}
//     </ul>`
//     res.send(HTML);
// });


// // app.get("/api/users/:id", (req, res)=>{
// //     const id = Number(req.params.id);
// //     const user = users.find(user => user.id === id);
// //     return res.json(user);
// // });

// // app.patch("/api/user:id", (req, res)=>{
// //     return res.json({Status: "panding"});
// // });

// // app.delete("/api/user:id", (req, res)=>{
// //     return res.json({Status: "panding"});
// // });



// // we use /api/users/:id in three requests insted of three requests we can create a route and use three requests at once



// app.route("/api/users/:id")
// .get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     return res.json(user);
// })
// .post((req, res) => {
//     const body = req.body;
//     return res.json({ status: "pending" });
// })
// .delete((req, res) => {
//     return res.json({ status: "pending" });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });




// Chat GPT Code ==


const express = require('express');
const fs = require('fs');
const path = require('path');
const mongoos = require('mongoos')
const app = express();

const PORT = 8000;

const filePath = path.join(__dirname, "MOCK_DATA.json");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const getUsers = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
};

const saveUsers = (users) => {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};


app.get("/api/users", (req, res) => {
    res.setHeader("Vishal", "Vashishth");
    console.log(req.header);
    const users = getUsers();
    return res.json(users);
});


app.get("/users", (req, res) => {
    const users = getUsers();

    const HTML = `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>`;

    res.send(HTML);
});


app.get("/api/users/:id", (req, res) => {
    const users = getUsers();
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    return res.json(user);
});


app.post("/api/users", (req, res) => {
    const users = getUsers();
    const newUser = req.body;

    newUser.id = users.length ? users[users.length - 1].id + 1 : 1;

    users.push(newUser);
    saveUsers(users);
    

    return res.status(201).json({
        message: "User added successfully",
        user: newUser
    });
});


app.delete("/api/users/:id", (req, res) => {
    let users = getUsers();
    const id = Number(req.params.id);

    users = users.filter(u => u.id !== id);
    saveUsers(users);

    return res.json({ message: "User deleted" }); 
});
    

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



// const express = require('express');
// const users = require("./MOCK_DATA.json");
// const fs = require("fs")
// const app = express();
// const PORT = 8000;

// app.use(express.urlencoded({extended: false}));

// app.get("/api/users", (req, res)=>{
//     return res.json(users);
// });

// app.get("/users", (req, res)=>{
//     const HTML =  `
//     <ul>
//     ${users.map(user => `<li>${user.first_name}</li>`).join("")}
//     </ul>`
//     res.send(HTML);
// });

// app.route("/api/users/:id", (req, res) => {
//     const users = getUsers();
//     const id = Number(req.params.id);
//     const user = users.find(u => u.id === id);

//     return res.json(user);
// });

// app.post("/api/users/", (req, res) => {
//     const users = getUsers();
//     const newUser = req.body;

//     newUser.id = users.length ? users[users.length - 1].id + 1 : 1;

//     users.push(newUser);
//     saveUsers(users);

//     return res.json({
//         message: "User added successfully",
//         user: newUser
//     });
// })
// app.delete("/api/users/",(req, res) => {
//     return res.json({ status: "pending" });
// });


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });