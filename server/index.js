const express = require("express")
const cors = require("cors")
const app = express()
const todorouter = require("./routes/todo");
const connectDb = require("./config/config");
require("dotenv").config();

app.use(cors())
app.use(express.json())
connectDb()
app.use("/todo",todorouter)
app.listen(2024,()=>console.log("the app is running"))