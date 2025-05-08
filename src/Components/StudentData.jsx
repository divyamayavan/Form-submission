import React from "react";
import StudentCard from "./StudentCard";

function StudentData () {
    

    const students = [
        { id:1, name: "John Doe", course: "Mathematics" },
        { id:2, name: "Jane Smith", course: "Science" },
        { id:3, name: "Sam Brown", course: "History" },
        { id:4, name: "Emily Davis", course: "Literature" },
        { id:5, name: "Michael Johnson", course: "Art" },
       ]
    
       return (
        <div>
            <h1>Student List</h1>
            {students.map(student => (
                <StudentCard 
                key={student.id}
                name={student.name}
                course={student.course}
                />
            ))}
        </div>
    )
}

export default StudentData;