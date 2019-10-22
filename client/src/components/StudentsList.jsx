import React from 'react'

const StudentsList = ({ students }) => {
    return(
        <div>
            <h1>Students</h1>
            {students.map(student => (
                <p key={student}>{student}</p>
            ))}
        </div>
    )
}

export default StudentsList;