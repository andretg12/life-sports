import React from "react";


const StudentsList = ({ students, academies, academy, location, locations }) => {
    console.log(students)
    return(
        <div>
            <h1 className="text-center">STUDENTS</h1>
            <div className="container">
			{/* <form className="row">
				<label className="visuallyhidden" htmlFor="student-academy-select">
					Select Academy
				</label>
				<select
					className="form-control col-sm-6 col-md-3"
					name="academy"
					id="student-academy-select"
				>
					<option defaultValue></option>
					{academies.map((academy, i) => (
						<option key={i}>{academy.name}</option>
					))}
				</select>

				<label className="visuallyhidden" htmlFor="student-location-select">
					Select Location
				</label>
				<select
					className="form-control col-sm-6 col-md-3"
					name="location"
					id="student-location-select"
				>
					<option defaultValue></option>
					<option></option>
					{locations.map((location, i) => (
						<option key={i}>{location}</option>
					))}
				</select>

				<label className="visuallyhidden" htmlFor="student-active">
					Active Student
				</label>
				<select
					className="form-control col-sm-6 col-md-3"
					name="active"
					id="student-active"
				>
					<option>Active</option>
					<option>Inactive</option>
				</select>

				<label className="visuallyhidden" htmlFor="student-name-search">
					Search by Name
				</label>
				<input
					className="form-control col-sm-6 col-md-3"
					type="text"
					id="student-name-search"
					placeholder="SEARCH NAME"
				></input>
			</form> */}
            <div className="row">
			{students.map((student, i) => (
				<div key={i} className="container">
                <div className="card-body">
					
                  <h3 className="card-header">{student.firstName} {student.lastName}</h3>

                  <p className="card-subtitle mt-3">{student.academy} {student.location}</p>
                  <p className="card-text mt-3">Parent Name: {student.parentName}</p>
                  <p className="card-text">Parent Email: {student.parentEmail}</p>
                  <p className="card-text">Parent Phone: {student.parentPhone}</p>

                </div>
              </div>
            ))}
            </div>
            </div>
		</div>
	);
};

export default StudentsList;
