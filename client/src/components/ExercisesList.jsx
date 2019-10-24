import React, { Component } from "../../node_modules/react";
import { Link } from "../../node_modules/react-router-dom";
import axios from "axios";

const Exercise = (props) => (
<div className="exercise-box">
<div className="card-body">
  <p className="card-header">Date: {props.exercise.username}</p>
  <p className="card-subtitle">Duration: {props.exercise.description}</p>
  <p className="card-text ml-3">{props.exercise.duration}</p>
  <p className="card-text ml-3">{props.exercise.date.substring(0,10)}</p>
  <Link to={"/edit/" + props.exercise._id}>edit</Link>
  <a
				href="#"
				onClick={() => {
					props.deleteExercise(props.exercise._id);
				}}
			>
				delete
			</a>
</div>
</div>
);

export default class ExercisesList extends Component {
	constructor(props) {
		super(props);

		this.deleteExercise = this.deleteExercise.bind(this);

		this.state = { exercises: [] };
	}

	componentDidMount() {
		axios
			.get("/exercises/")
			.then(response => {
				this.setState({ exercises: response.data });
			})
			.catch(error => {
				console.log(error);
			});
	}

	deleteExercise(id) {
		axios.delete("/exercises/" + id).then(response => {
			console.log(response.data);
		});

		this.setState({
			exercises: this.state.exercises.filter(el => el._id !== id)
		});
	}

	exerciseList() {
		return this.state.exercises.map(currentexercise => {
			return (
				<Exercise
					exercise={currentexercise}
					deleteExercise={this.deleteExercise}
					key={currentexercise._id}
				/>
			);
		});
	}

	render() {
		return (
			<div>
				<h1 className="text-center">EXERCISES</h1>
				<div className="container">
					<div className="row">{this.exerciseList()}</div>
				</div>
				<Link to="/addexercise" className="btn nav-link lifesports">ADD EXERCISE</Link>
			</div>
		);
	}
}
