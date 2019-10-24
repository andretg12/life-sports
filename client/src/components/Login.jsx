import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = ({ username }) => {
	const [password, setPassword] = useState("");
	
	const handlePasswordChange = e => {
		setPassword(e.target.value);
	};

	let submitObject = {
		username: username,
		password: password
	};
	const handleSubmit = e => {
		axios.post("students/login", submitObject).then(data => {
			if (data.studentID) {
				window.location.pathname.replace(`/student/${data._id}`);
			}
			if(data) return
		});
	};
	return (
		<div>
			<h1 className="text-center">Login</h1>
			<div className="container">
				<form className="row">
					<label className="visuallyhidden" htmlFor="username">
						Username
					</label>
					<input
						className="form-control mt-5 ml-5 mr-5"
						type="text"
						id="username"
						placeholder="USERNAME"
					></input>

					<label className="visuallyhidden" htmlFor="password">
						Password
					</label>
					<input
						className="form-control mt-5 ml-5 mr-5"
						type="password"
						id="password"
						placeholder="PASSWORD"
						onChange={() => handlePasswordChange}
					></input>

					<input
						className="btn btn-secondary mt-5 ml-5 mb-5"
						value="LOGIN"
						onClick={handleSubmit}
					></input>
				</form>
			</div>
		</div>
	);
};

export default Login;
