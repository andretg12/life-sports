import React from 'react';

const ShowStudent = ({ student }) => {
    return(
        <div>
            <h1 className="text-center">{student.toUpperCase()}</h1>
        </div>
    )
}

export default ShowStudent;