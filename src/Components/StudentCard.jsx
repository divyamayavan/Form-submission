import React from "react";

function StudentCard ({name, course}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{course}</p>
        </div>
    )
}

export default StudentCard;