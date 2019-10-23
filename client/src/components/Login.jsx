import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = ({ history }) => {
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
	const handleSubmit = e => {
		axios.post("students/login", submitObject);
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
						onChange={() => handleUsernameChange}
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
