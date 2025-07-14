
const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();

// Routes
app.get('/', (req, res) => {
    res.send("hello from home page");
});

app.get('/about', (req, res) => {
    const username = req.query.myname || "guest";
    res.send(`hi, ${username}`);
});

app.get('/signup', (req, res) => {
    res.send("This is a signup form");
});

app.post('/signup', (req, res) => {
    res.send("Success");
});

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.method} ${req.url} - new request received\n`;

    // ✅ Write log asynchronously
    fs.appendFile("./log.txt", log, (err) => {
        if (err) {
            console.error("❌ Error writing log:", err);
        } else {
            console.log("✅ Log written to log.txt");
        }
    });

    // ✅ Immediately hand off to Express
    app(req, res);
});

myserver.listen(8006, () => {
    console.log("✅ Server started on port 8006");
});
