const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World from TR TECH!')
})

app.get('/users', (req, res) => {
    res.send("Users are waking up");
})

app.get('/products', (req, res) => {
    res.send("Products are selling on market")
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
