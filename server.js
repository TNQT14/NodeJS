const express = require('express')// common js
const app = express()// app express
const port = 9000//port

//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World! Express với Quang Thái')
})

//khai báo route
app.get('/1', (req, res) => {
    res.send('Hello World! Express với Quang Thái với trang 1')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})