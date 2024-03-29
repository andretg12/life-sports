import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker/lib";
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
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
			.get("/exercises/" + this.props.match.params.id)
			.then(response => {
				this.setState({
					username: response.data.username,
					description: response.data.description,
					duration: response.data.duration,
					date: new Date(response.data.date)
				});
			})
			.catch(function(error) {
				console.log(error);
			});

		axios
			.get("/users/")
			.then(response => {
				if (response.data.length > 0) {
					this.setState({
						users: response.data.map(user => user.username)
					});
				}
			})
			.catch(error => {
				console.log(error);
			});
	}

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

	onChangeDate = date => {
		this.setState({
			date: date
		});
	};

	oninput = e => {
		e.preventDefault();

		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date
		};

		console.log(exercise);

		axios
			.post("/exercises/update/" + this.props.match.params.id, exercise)
			.then(res => console.log(res.data));

		window.location = "/";
	};

	render() {
		return (
			<div>
				<h1 className="text-center">Edit Exercise</h1>
				<form oninput={this.oninput}>
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
						<input type="submit" value="SAVE" className="btn btn-secondary"></input>
						</div>
				</form>
			</div>
		);
	}
}
