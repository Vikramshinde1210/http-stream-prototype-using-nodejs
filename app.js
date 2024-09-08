const express = require('express')
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const PORT = 3000

app.use(express.json())
app.use(cors());

app.get("/",(req,res) => {
    res.status(200).json({"msg":"Hello World"})
})

app.listen(PORT,(req,res) => {
    console.log(`Server started listening on port ${PORT}`)
})