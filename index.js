const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello World from TR TECH!')
})


const users = [
    { id: 1, name: "John Doe", email: "john@doe.com" },
    { id: 2, name: "Jan Doe", email: "jan@doe.com" },
    { id: 3, name: "Jon Doe", email: "jon@doe.com" }
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log(req.headers['content-type']);
    console.log("Data in request:", req.body);

    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);

    res.send({
        success: true,
        data: newUser,
        message: "User created successfully",
        user: req.body
    });
});




app.get('/products', (req, res) => {
    res.send("Products are selling on market")
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
