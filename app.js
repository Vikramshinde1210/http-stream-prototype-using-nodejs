const express = require('express')
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const PORT = 3000

const app = express()

app.use(express.json())
app.use(cors());

app.get("/",(req,res) => {
    res.status(200).json({"msg":"Hello World"})
})

app.get('/measurements.json', (req, res) => {
    // Set the content-type to application/json
    res.setHeader('Content-Type', 'application/json');
    
    // Create a readable stream for the JSON file
    const stream = fs.createReadStream(path.join(__dirname, 'measurements.json'));
    
    // Pipe the stream to the response
    stream.pipe(res);
});

app.listen(PORT,(req,res) => {
    console.log(`Server started listening on port ${PORT}`)
})