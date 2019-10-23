import React from 'react'

<<<<<<< HEAD
const StudentsList = ({ students }) => {
    return (
=======
const StudentsList = ({ students, academies, academy, location, locations }) => {
    console.log(students)
    return(
>>>>>>> fd88865132ba41a34fca03947c1a2bdc43c62936
        <div>
            <h1 className="text-center">STUDENTS</h1>
            <div className="container">
<<<<<<< HEAD
                <form className="row">
                    <label className="visuallyhidden" htmlFor="student-academy-select">Select Academy</label>
                    <select className="form-control col-sm-6 col-md-3" id="student-academy-select"></select>

                    <label className="visuallyhidden" htmlFor="student-location-select">Select Location</label>
                    <select className="form-control col-sm-6 col-md-3" id="student-location-select"></select>

                    <label className="visuallyhidden" htmlFor="student-name-search">Search by Name</label>
                    <input className="form-control col-sm-6 col-md-3" type="text" id="student-name-search"></input>
                </form>
                {students.map(student => (
                    <p key={student}>{student}</p>
                ))}
            </div>
=======
            <form className="row">
            <label className="visuallyhidden" htmlFor="student-academy-select">Select Academy</label>
            <select className="form-control col-sm-6 col-md-3" name="academy" id="student-academy-select">
                <option>{academy}</option>
                {academies.map((academy, i) => <option key={i}>{academy}</option>)}
            </select>

            <label className="visuallyhidden" htmlFor="student-location-select">Select Location</label>
            <select className="form-control col-sm-6 col-md-3" name="location" id="student-location-select">
                <option>{location}</option>
                {locations.map((location, i) => <option key={i}>{location}</option>)}
            </select>

            <label className="visuallyhidden" htmlFor="student-active">Active Student</label>
            <select className="form-control col-sm-6 col-md-3" name="active" id="student-active">
                <option>Active</option>
                <option>Inactive</option>
            </select>

            <label className="visuallyhidden" htmlFor="student-name-search">Search by Name</label>
            <input className="form-control col-sm-6 col-md-3" type="text" id="student-name-search"></input>
            </form>
            {students.map(student => (
                <p key={student}>{student.firstname}</p>
            ))}
        </div>
>>>>>>> fd88865132ba41a34fca03947c1a2bdc43c62936
        </div>
    )
}

export default StudentsList;