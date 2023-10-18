const mongoose=require('mongoose')
const studentSchema=mongoose.Schema({
    studentName:{type:String,required:true},
    studentClass:{type:String,required:true},
    studentMarks:{type:Number,required:true},
})

const StudentModel=mongoose.model('student',studentSchema)

module.exports=StudentModel