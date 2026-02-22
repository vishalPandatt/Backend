
const express = require('express');
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

app.get("/api/users", (req, res)=>{
    return res.json(users);
});

app.get("/users", (req, res)=>{
    const HTML =  `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>`
    res.send(HTML);
});


// app.get("/api/users/:id", (req, res)=>{
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id);
//     return res.json(user);
// });

// app.patch("/api/user:id", (req, res)=>{
//     return res.json({Status: "panding"});
// });

// app.delete("/api/user:id", (req, res)=>{
//     return res.json({Status: "panding"});
// });

// we use /api/users/:id in three requests insted of three requests we can create a route and use three requests at once

app.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
})
.patch((req, res) => {
    return res.json({ status: "pending" });
})
.delete((req, res) => {
    return res.json({ status: "pending" });
});

app.post("/api/user", (req, res) => {
    return res.json({ status: "pending" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
