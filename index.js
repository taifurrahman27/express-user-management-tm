const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

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

app.get('/products', (req, res) => {
    res.send("Products are selling on market")
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
