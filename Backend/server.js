const express=require('express')
const cors=require('cors')
const studentrouter = require('./routes/student.router')
const connection = require('./connection/db')
require('dotenv').config()
const app=express()
app.use(express.json())
app.use(cors())
app.use("/student",studentrouter)

app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
    console.log('connected to port 4031')
})