import { useState, useEffect } from "react";
import axios from "axios";
function StudentList() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      let res = await axios.get("http://localhost:4031/student/get");
      const bacdata = res.data;
      setdata(bacdata);
      console.log(data);
    }
    fetchdata();
  }, [data]);
  return (
    <div>
      <h1>Student List</h1>
      {data.map((el) => (
        <div>
          <h1>{el.studentName}</h1>
          <h1>{el.studentClass}</h1>
          <h1>{el.studentMarks}</h1>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
