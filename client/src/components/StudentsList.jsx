import React from 'react'

const StudentsList = ({ students }) => {
    return (
        <div>
            <h1 className="text-center">Students</h1>
            <div className="container">
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
        </div>
    )
}

export default StudentsList;