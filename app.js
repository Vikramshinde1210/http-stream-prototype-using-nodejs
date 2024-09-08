const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.get("/",(req,res) => {
    res.status(200).json({"msg":"Hello World"})
})

app.listen(PORT,(req,res) => {
    console.log(`Server started listening on port ${PORT}`)
})