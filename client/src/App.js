import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./Components/Navbar"
import ExercisesList from "./Components/ExercisesList";
import EditExercise from "./Components/EditExercise";
import CreateExercise from "./Components/CreateExercise";
import CreateUser from "./Components/CreateUser";
import StudentList from "./Components/StudentsList";
import Attendance from "./Components/Attendance";
import Forms from "./Components/Forms";
import Resources from "./Components/Resources";
import ShowStudent from "./Components/ShowStudent";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import TakeAttendance from "./Components/TakeAttendance"


class App extends Component {
  state = {
    academies: [],
    academy: "",
    locations: [],
    location: "",//Load students and resources for location
    userType: "",//Coach or student for different user experience
    students: ["Sam", "James", "Terrence", "Quincy", "Jane", "Sally", "Joe"],//list of students at location
    targetStudent: "James"
  }

  render() {
    const { academies, academy, locations, location, students, targetStudent } = this.state
  return (
    <Router>
      <div className="">
      <Route path="/" exact render={(props) => <StudentList {...props} students={students} />} />
      <Route path="/edit/:id" render={(props) => <EditExercise {...props} onChangeStudent={this.onChangeStudent} onChangeDescription={this.onChangeDescription} onChangeDuration={this.onChangeDuration} onChangeDate={this.onChangeDate} onSubmit={this.onSubmitExercise}/>} />
      <Route path="/create" render={(props) => <CreateExercise {...props} />} />
      <Route path="/attendance" render={(props) => <Attendance {...props} students={students} />} />
      <Route path="/user" render={(props) => <CreateUser {...props} />} />
      <Route path="/exercise" component={ExercisesList} />
      <Route path="/form" render={(props) => <Forms {...props}  />} />
      <Route path="/Resources" render={(props) => <Resources {...props} />} />
      <Route path="/student" render={(props) => <ShowStudent {...props} student={targetStudent} />} />
      <Route path="/signup" render={(props) => <Signup {...props} />} />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/takeattendance" render={(props) => <TakeAttendance {...props} />} />
      </div>
    </Router>
  )
  }
}

export default App;
