const express = require("express")
const path = require("path")
const userRouter = require("./routes/user.routes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use(express.static(path.join(__dirname,"../public")))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use("/",userRouter)


module.exports = app
