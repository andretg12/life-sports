import React, { Component } from "../../node_modules/react";
import axios from "../../node_modules/axios";
import DatePicker from "../../node_modules/react-datepicker/lib";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			description: "",
			duration: 0,
			date: new Date(),
			users: []
		};
	}

	componentDidMount() {
		axios
			.get("/users/")
			.then(response => {
				if (response.data.length > 0) {
					this.setState({
						users: response.data.map(user => user.username),
						username: response.data[0].username
					});
				}
			})
			.catch(error => {
				console.log(error);
			});
	}

	onChangeUsername = e => {
		this.setState({
			username: e.target.value
		});
	};

	onChangeDescription = e => {
		this.setState({
			description: e.target.value
		});
	};

	onChangeDuration = e => {
		this.setState({
			duration: e.target.value
		});
	};

	onChangeDate(date) {
		this.setState({
			date: date
		});
	}

	oninput(e) {
		e.preventDefault();

		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date
		};

		console.log(exercise);

		axios.post("/exercises/add", exercise).then(res => console.log(res.data));

		window.location = "/";
	}

	render() {
		return (
			<div>
				<h1 className="text-center">NEW EXERCISE</h1>
				<form className="container mt-5" oninput={this.oninput}>
					<div className="form-group">
						<label>Username: </label>
						<select
							ref="userInput"
							required
							className="form-control"
							value={this.state.username}
							onChange={this.onChangeUsername}
						>
							{this.state.users.map((user, i) => {
								return (
									<option key={i} value={user}>
										{user}
									</option>
								);
							})}
						</select>
					</div>
					<div className="form-group">
						<label>Description: </label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.description}
							onChange={this.onChangeDescription}
						/>
					</div>
					<div className="form-group">
						<label>Duration (in minutes): </label>
						<input
							type="text"
							className="form-control"
							value={this.state.duration}
							onChange={this.onChangeDuration}
						/>
					</div>
					<div className="form-group">
						<label>Date: </label>
						<div>
							<DatePicker
								selected={this.state.date}
								onChange={this.onChangeDate}
							/>
						</div>
					</div>
					<input type="submit" value="SAVE" className="btn btn-secondary"></input>
				</form>
			</div>
		);
	}
}
