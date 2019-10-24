////////////////////////////////
////     Road to Hire      ////
///     LifeSports App     ///
/////////////////////////////
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require("path")
const Bcrypt = require("bcryptjs")
const morgan = require('morgan')


const app = express();
app.use(morgan('combined'))
const port = process.env.PORT || 5000;
let uri = `mongodb+srv://root:${process.env.DB_PASS}@life-sports-sbsvp.mongodb.net/test?retryWrites=true&w=majority`;

// register middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = `mongodb+srv://root:${process.env.DB_PASS}@life-sports-sbsvp.mongodb.net/lifesportsDB?retryWrites=true&w=majority`;
  // connection string for Atlas here  
} else {
  uri = `mongodb+srv://root:${process.env.DB_PASS}@life-sports-sbsvp.mongodb.net/lifesportsDB?retryWrites=true&w=majority`;
}

// connection to database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection is live");
})

// register api catalogue
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/coaches');
const studentRouter = require('./routes/students')
const coachRouter = require('./routes/coaches')
app.use('/api/exercises', exercisesRouter);
app.use('/api/users', usersRouter);
app.use('/api/students', studentRouter);
app.use('/api/coaches', coachRouter)
app.use('api/academies' academyRouter)

// Creating live connection to reactjs app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});