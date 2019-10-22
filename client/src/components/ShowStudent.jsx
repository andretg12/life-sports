import React from 'react';

const ShowStudent = ({ students }) => {
    return(
        <div>
            {students.map(student =>{
                return(
                    <div>
                    <h1 key={student}>{student}</h1>
                    <p>Description of {student}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default ShowStudent;