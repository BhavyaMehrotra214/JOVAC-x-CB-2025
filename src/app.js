const express = require('express');
const authRouter = require("../src/router/auth.router")
const app = express();

app.use((req, res, next)=>{
       console.log("request middleware");
       next()
})
app.use("/api/auth",authRouter)

module.exports = app;
