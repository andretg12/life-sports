import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleUsernameChange = e => {
		setUsername(e.target.value);
	};
	const handlePasswordChange = e => {
		setPassword(e.target.value);
	};
	const handleSubmit = e => {
		axios
			.post("/students/login", {
				username: username,
				password: password
			})
			.then(console.log("success"));
	};
	return (
		<div>
			<h1 className="text-center">Login</h1>
			<div className="container">
				<form className="row" onSubmit={handleSubmit}>
					<label className="visuallyhidden" htmlFor="username">
						Username
					</label>
					<input
						className="form-control mt-5 ml-5 mr-5"
						type="text"
						id="username"
						placeholder="USERNAME"
						onChange={handleUsernameChange}
					></input>

					<label className="visuallyhidden" htmlFor="password">
						Password
					</label>
					<input
						className="form-control mt-5 ml-5 mr-5"
						type="password"
						id="password"
						placeholder="PASSWORD"
						onChange={handlePasswordChange}
					></input>

					<button
						className="btn btn-secondary mt-5 ml-5 mb-5"
						type="submit"
						value="LOGIN"
					>
						LOGIN
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
