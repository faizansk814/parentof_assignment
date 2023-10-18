import { useState } from "react"
import axios from 'axios'
import StudentList from "./studentlist"

function StudentAdd(){
    const [studentName,setStudentName]=useState("")
    const [studentClass,setStudentClass]=useState("")
    const [studentMarks,setStudentMarks]=useState("")
    async function HandleSubmit(e){
        e.preventDefault()
        let obj={
            studentName,
            studentClass,
            studentMarks
        }
        let res=await axios.post("http://localhost:4031/student/post",obj)
        console.log(res)
        
    }
    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <input type="text" value={studentName} onChange={(e)=>setStudentName(e.target.value)} />
                <input type="text" value={studentClass} onChange={(e)=>setStudentClass(e.target.value)} />
                <input type="number" value={studentMarks} onChange={(e)=>setStudentMarks(e.target.value)} />
                <input type="submit" />
            </form>
            <StudentList />
        </div>
    )
}

export default StudentAdd