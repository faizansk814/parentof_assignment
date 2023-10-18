const express=require('express')
const StudentModel = require('../models/student.model')

const studentrouter=express.Router()

studentrouter.post("/post",async (req,res)=>{
    const {studentName,studentClass,studentMarks}=req.body
    try {
        const newStudent=new StudentModel({studentName,studentClass,studentMarks})
        await newStudent.save()
        return res.status(200).send({"msg":"Student added"})
    } catch (error) {
        return res.status(401).send({"msg":error.message})
    }
})

studentrouter.get("/get",async (req,res)=>{
    try {
       const allStudent=await StudentModel.find()
       return res.status(200).send(allStudent) 
    } catch (error) {
        return res.status(401).send({"msg":error.message})
    }
})

module.exports=studentrouter