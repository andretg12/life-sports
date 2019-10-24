import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ExercisesList from "./Components/ExercisesList";
import EditExercise from "./Components/EditExercise";
import CreateExercise from "./Components/CreateExercise";
import CreateUser from "./Components/CreateUser";
import StudentList from "./Components/StudentsList";
import Attendance from "./Components/Attendance";
import Forms from "./Components/Forms";
import Resources from "./Components/Resources";
import ShowStudent from "./Components/ShowStudent";
import StudentSignup from "./Components/StudentSignup";
import CoachSignup from "./Components/CoachSignup";
import Login from "./Components/Login";
import TakeAttendance from "./Components/TakeAttendance";
import AddResource from "./Components/AddResources";

class App extends Component {
  state = {
    academies: [],
    academy: "",
    locations: [],
    location: "",//Load students and resources for location
    userType: "",//Coach or student for different user experience
    username: "",
    students: [],//list of students at location
    targetStudent: {firstName: "James", lastName: "Bond", school: "Spy academy", academy: "LifeHoops", location: "Harris YMCA", picture: "https://timedotcom.files.wordpress.com/2019/03/kitten-report.jpg", grade: "6th Grade", schoolId: "34203k30s", street: "123 This St.", city: "Charlotte", state: "NC", zipcode: "23049", parentName: "Jane Bond", parentEmail: "this@this.com", parentPhone: "3423423543", academicStats: {gpa: "3.0", readingLvl: "10th grade"}}
  }
	state = {
		academies: [],
		academy: "",
		locations: [],
		location: "", //Load students and resources for location
		userType: "", //Coach or student for different user experience
		students: [], //list of students at location
		targetStudent: {
			firstName: "James",
			lastName: "Bond",
			school: "Spy academy",
			academy: "LifeHoops",
			location: "Harris YMCA",
			picture:
				"https://timedotcom.files.wordpress.com/2019/03/kitten-report.jpg",
			grade: "6th Grade",
			schoolId: "34203k30s",
			street: "123 This St.",
			city: "Charlotte",
			state: "NC",
			zipcode: "23049",
			parentName: "Jane Bond",
			parentEmail: "this@this.com",
			parentPhone: "3423423543",
			academicStats: { gpa: "3.0", readingLvl: "10th grade" }
		}
	};

	componentDidMount() {
		axios
			.get("/api/students/")
			.then(response => {
				this.setState({ students: response.data, userType: "Student" });
			})
			.catch(error => {
				console.log(error);
			});

<<<<<<< HEAD
		axios.get("/coaches/").then(response => {
			this.setState({ coaches: response.data });
    })
    .catch(error => {
      console.log(error);
    });
    
    axios.get("/academies/")
    .then(response => {
      this.setState({ academies: response.data })
    })
    .catch(error => {
      console.log(error)
    });
  }
  
  handleLogin = () => {
    axios.get(`/coaches/${this.state.username}`)
    .then(response => {
      this.setState({academy: response.academy, location: response.academy})
    })
    .catch(error => {
      console.log(error)
    })
  }

  componentDidUpdate() {
    if (this.prevState !== this.state){
      this.handleLogin()
    }
  }

  handleUsername = e => {
		this.setState({username: e.target.value});
	};

  render() {
    const { academies, academy, locations, location, students, targetStudent } = this.state
  return (
    <Router>
      <Navbar />
      <div className="">
      <Route path="/" exact render={(props) => <StudentList {...props} students={students} location={location} academy={academy} locations={locations} academies={academies} />} />
      <Route path="/edit/:id" render={(props) => <EditExercise {...props} onChangeStudent={this.onChangeStudent} onChangeDescription={this.onChangeDescription} onChangeDuration={this.onChangeDuration} onChangeDate={this.onChangeDate} onSubmit={this.onSubmitExercise}/>} />
      <Route path="/create" render={(props) => <CreateExercise {...props} />} />
      <Route path="/attendance" render={(props) => <Attendance {...props} students={students} />} />
      <Route path="/user" render={(props) => <CreateUser {...props} />} />
      <Route path="/exercise" component={ExercisesList} />
      <Route path="/form" render={(props) => <Forms {...props}  />} />
      <Route path="/resources" render={(props) => <Resources {...props} />} />
      <Route path="/student/show" render={(props) => <ShowStudent {...props} student={targetStudent} />} />
      <Route path="/student/signup" render={(props) => <StudentSignup {...props} location={location} locations={locations} academy={academy} academies={academies}/>} />
      <Route path="/coach/signup" render={(props) => <CoachSignup {...props} location={location} locations={locations} academy={academy} academies={academies}/>} />
      <Route path="/login" render={(props) => <Login {...props} handleUsername={this.handleUsername} />} />
      <Route path="/takeattendance" render={(props) => <TakeAttendance {...props} />} />
      <Route path="/addresource" render={(props) => <AddResource {...props} />} />
      </div>
    </Router>
  )
  }
		axios
			.get("/api/coaches/")
			.then(response => {
				this.setState({ coaches: response.data, usertype: "Coach" });
			})
			.catch(error => {
				console.log(error);
			});

		axios
			.get("api/academies/")
			.then(response => {
				this.setState({ academies: response.data });
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		const {
			academies,
			coaches,
			userType,
			academy,
			locations,
			location,
			students,
			targetStudent
		} = this.state;
		return (
			<Router>
				<Navbar />
				<div className="">
					<Route
						path="/"
						exact
						render={props => (
							<StudentList
								{...props}
								students={students}
								location={location}
								academy={academy}
								locations={locations}
								academies={academies}
							/>
						)}
					/>
					<Route
						path="/edit/:id"
						render={props => (
							<EditExercise
								{...props}
								onChangeStudent={this.onChangeStudent}
								onChangeDescription={this.onChangeDescription}
								onChangeDuration={this.onChangeDuration}
								onChangeDate={this.onChangeDate}
								onSubmit={this.onSubmitExercise}
							/>
						)}
					/>
					<Route
						path="/create"
						render={props => <CreateExercise {...props} />}
					/>
					<Route
						path="/attendance"
						render={props => <Attendance {...props} students={students} />}
					/>
					<Route path="/user" render={props => <CreateUser {...props} />} />
					<Route path="/exercise" component={ExercisesList} />
					<Route path="/form" render={props => <Forms {...props} />} />
					<Route path="/resources" render={props => <Resources {...props} />} />
					<Route
						path="/student/show"
						render={props => <ShowStudent {...props} student={targetStudent} />}
					/>
					<Route
						path="/student/signup"
						render={props => (
							<StudentSignup
								{...props}
								location={location}
								locations={locations}
								academy={academy}
								academies={academies}
							/>
						)}
					/>
					<Route
						path="/coach/signup"
						render={props => (
							<CoachSignup
								{...props}
								location={location}
								locations={locations}
								academy={academy}
								academies={academies}
							/>
						)}
					/>
					<Route
						path="/login"
						render={props => <Login {...props} userType={userType} />}
					/>
					<Route
						path="/takeattendance"
						render={props => <TakeAttendance {...props} />}
					/>
					<Route
						path="/addresource"
						render={props => <AddResource {...props} />}
					/>
				</div>
			</Router>
		);
	}
}

export default App;
