import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = props => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsernameChange = e => {
		setUsername(e.target.value);
	};
	const handlePasswordChange = e => {
		setPassword(e.target.value);
	};

	let submitObject = {
		username: username,
		password: password
	};

	//do two handle submits and on the
	const handleStudentSubmit = e => {
		axios.post("/api/students/login", submitObject).then(data => {
			window.location.href = `/`;
		});
	};
	const handleCoachSubmit = e => {
		axios.post("coaches/login", submitObject).then(data => {
			window.location.href = `/`;
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
						onChange={e => handleUsernameChange(e)}
					></input>

					<label className="visuallyhidden" htmlFor="password">
						Password
					</label>
					<input
						className="form-control mt-5 ml-5 mr-5"
						type="password"
						id="password"
						placeholder="PASSWORD"
						onChange={e => handlePasswordChange(e)}
					></input>

					<input
						className="btn btn-secondary mt-5 ml-5 mb-5"
						type="submit"
						value="LOGIN"
						onClick={() => {
							handleStudentSubmit();
						}}
					></input>
				</form>
			</div>
		</div>
	);
};

export default Login;
