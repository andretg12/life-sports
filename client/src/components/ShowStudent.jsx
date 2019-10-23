import React from 'react';

const ShowStudent = ({ student }) => {
    return(
        <div>
            <h1 className="text-center">{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</h1>
            <img className="student-image" src={student.picture} alt={student.firstName}></img>
            <p>First Name: {student.firstName}</p>
            <p>Last Name: {student.lastName}</p>
            <p>School: {student.school}</p>
            <p>Academy/Location: {student.academy} {student.location}</p>
            <p>Grade: {student.grade}</p>
            <p>Student ID: {student.schoolId}</p>
            <p>GPA: {student.academicStats.gpa}</p>
            <p>Reading Level: {student.academicStats.readingLvl}</p>
            <p>Address: {student.street}, {student.city} {student.state}, {student.zipcode}</p>
            <p>Parent Name: {student.parentName}</p>
            <p>Parent Email: {student.parentEmail}</p>
            <p>Parent Phone Number: {student.parentPhone}</p>
        </div>
    )
}

export default ShowStudent;