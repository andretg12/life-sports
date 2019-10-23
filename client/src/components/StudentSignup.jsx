import React from "react";

const StudentSignup = ({ location, locations, academy, academies }) => {
<<<<<<< HEAD
    return (
        <div>
            <h1 className="text-center">ADD STUDENT</h1>
            <form className="container mt-5">
                <label className="visuallyhidden" htmlFor="student-fname">First Name</label>
                <input className="form-control mt-5" type="text" name="firstName" id="student-fname" placeholder="FIRST NAME"></input>

                <label className="visuallyhidden" htmlFor="student-lname">Last Name</label>
                <input className="form-control mt-5" type="text" name="lastName" id="student-lname" placeholder="LAST NAME"></input>

                <label className="visuallyhidden" htmlFor="student-address">Address</label>
                <input className="form-control mt-5" type="text" name="street" id="student-address" placeholder="ADDRESS"></input>

                <label className="visuallyhidden" htmlFor="student-city">City</label>
                <input className="form-control mt-5" type="text" name="city" id="student-city" placeholder="CITY"></input>

                <label className="visuallyhidden" htmlFor="student-state">State</label>
                <input className="form-control mt-5" type="text" name="state" id="student-state" placeholder="STATE"></input>

                <label className="visuallyhidden" htmlFor="student-country">Country</label>
                <input className="form-control mt-5" type="text" name="country" id="student-country" placeholder="COUNTRY"></input>

                <label className="visuallyhidden" htmlFor="student-academy">Academy</label>
                <select className="form-control mt-5" type="text" name="academy" id="student-academy" placeholder="ACADEMY">
                <option selected>{academy}</option>
                {academies.map((academy, i)  => <option key={i}>{academy}</option>)}
                </select>

                <label className="visuallyhidden" htmlFor="student-location">Location</label>
                <select className="form-control mt-5" type="text" name="location" id="student-location" placeholder="LOCATION">
                    <option selected>{location}</option>
                    {locations.map((location, i) => <option key={i}>{location}</option>)}
                </select>

                <label className="visuallyhidden" htmlFor="parent-name">Parent Name</label>
                <input className="form-control mt-5" type="text" name="parentName" id="parent-name" placeholder="PARENT NAME"></input>

                <label className="visuallyhidden" htmlFor="parent-email">Parent Email</label>
                <input className="form-control mt-5" type="email" name="parentEmail" id="parent-email" placeholder="PARENT EMAIL"></input>

                <label className="visuallyhidden" htmlFor="school-name">School Name</label>
                <input className="form-control mt-5" type="text" name="schoolName" id="school-name" placeholder="SCHOOL NAME"></input>

                <label className="visuallyhidden" htmlFor="student-id">Student ID</label>
                <input className="form-control mt-5" type="text" name="schoolId" id="student-id" placeholder="STUDENT ID"></input>

                <label className="visuallyhidden" htmlFor="grade">Current Grade</label>
                <input className="form-control mt-5" type="text" name="grade" id="grade" placeholder="GRADE"></input>

                <label className="visuallyhidden" htmlFor="reading-level">Reading Level</label>
                <input className="form-control mt-5" type="text" name="readinglvl" id="reading-level" placeholder="READING LEVEL"></input>

                <label className="visuallyhidden" htmlFor="gpa">GPA</label>
                <input className="form-control mt-5" type="text" name="gpa" id="gpa" placeholder="GPA"></input>

                <button className="btn btn-secondary mt-5 mb-5" type="submit" value="submit">ADD</button>
            </form>
        </div>
    )
}

export default StudentSignup;
=======
	return (
		<div>
			<h1 className="text-center">ADD STUDENT</h1>
			<form className="container mt-5">
				<label className="visuallyhidden" htmlFor="student-fname">
					First Name
				</label>
				<input
					className="form-control mt-5"
					type="text"
					name="firstName"
					id="student-fname"
					placeholder="FIRST NAME"
				></input>

				<label className="visuallyhidden" htmlFor="student-lname">
					Last Name
				</label>
				<input
					className="form-control mt-5"
					type="text"
					name="lastName"
					id="student-lname"
					placeholder="LAST NAME"
				></input>

				<label className="visuallyhidden" htmlFor="student-address">
					Address
				</label>
				<input
					className="form-control mt-5"
					type="text"
					name="street"
					id="student-address"
					placeholder="ADDRESS"
				></input>

				<label className="visuallyhidden" htmlFor="student-city">
					City
				</label>
				<input
					className="form-control mt-5"
					type="text"
					name="city"
					id="student-city"
					placeholder="CITY"
				></input>

				<label className="visuallyhidden" htmlFor="student-state">
					State
				</label>
				<input
					className="form-control mt-5"
					type="text"
					name="state"
					id="student-state"
					placeholder="STATE"
				></input>

				<label className="visuallyhidden" htmlFor="student-country">
					Country
				</label>
				<input
					className="form-control mt-5"
					type="text"
					name="country"
					id="student-country"
					placeholder="COUNTRY"
				></input>

				<label className="visuallyhidden" htmlFor="student-academy">
					Academy
				</label>
				<select
					className="form-control mt-5"
					type="text"
					name="academy"
					id="student-academy"
					placeholder="ACADEMY"
				>
					<option>{academy}</option>
					{academies.map((academy, i) => (
						<option key={i}>{academy}</option>
					))}
				</select>

				<label className="visuallyhidden" htmlFor="student-location">
					Location
				</label>
				<select
					className="form-control mt-5"
					type="text"
					name="location"
					id="student-location"
					placeholder="LOCATION"
				>
					<option>{location}</option>
					{locations.map((location, i) => (
						<option key={i}>{location}</option>
					))}
				</select>

				<label className="visuallyhidden" htmlFor="parent-name">
					Parent Name
				</label>
				<input
					className="form-control mt-5"
					type="text"
					name="parentName"
					id="parent-name"
					placeholder="PARENT NAME"
				></input>

				<label className="visuallyhidden" htmlFor="parent-email">
					Parent Email
				</label>
				<input
					className="form-control mt-5"
					type="email"
					name="parentEmail"
					id="parent-email"
					placeholder="PARENT EMAIL"
				></input>

				<label className="visuallyhidden" htmlFor="school-name">
					School Name
				</label>
				<input
					className="form-control mt-5"
					type="text"
					name="schoolName"
					id="school-name"
					placeholder="SCHOOL NAME"
				></input>

				<label className="visuallyhidden" htmlFor="student-id">
					Student ID
				</label>
				<input
					className="form-control mt-5"
					type="text"
					name="schoolId"
					id="student-id"
					placeholder="STUDENT ID"
				></input>

				<label className="visuallyhidden" htmlFor="grade">
					Current Grade
				</label>
				<input
					className="form-control mt-5"
					type="text"
					name="grade"
					id="grade"
					placeholder="GRADE"
				></input>

				<label className="visuallyhidden" htmlFor="reading-level">
					Reading Level
				</label>
				<input
					className="form-control mt-5"
					type="text"
					name="readinglvl"
					id="reading-level"
					placeholder="READING LEVEL"
				></input>

				<label className="visuallyhidden" htmlFor="gpa">
					GPA
				</label>
				<input
					className="form-control mt-5"
					type="text"
					name="gpa"
					id="gpa"
					placeholder="GPA"
				></input>

				<button
					className="btn btn-secondary mt-5 mb-5"
					type="submit"
					value="submit"
				>
					ADD
				</button>
			</form>
		</div>
	);
};

export default StudentSignup;
>>>>>>> c0d1e4b069a06438371d2eaab8ecf096eef669af
