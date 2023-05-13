const express = require("express")
const app = express()
const path = require("path")
const session = require("express-session")
require('dotenv').config();
const db = require('./db/conn')

app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        sameSite: 'strict'
    }
}))

const admin_router = require("./routes/admin_router")
const player_router = require("./routes/player_router")


app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(player_router)
app.use(admin_router)

app.listen(5000, () => {
    console.log("Server listening on port 5000... http://localhost:5000");
})

