# LIFESPORTS APP

## What is our app?
This app was made for a non-profit called lifesports. It allows the coaches to keep track of the students on their team, permission slips, exercises they have done, how well they have been performing in games, how they are doing academically and much more. 

The app was built using React, Node, MongoDB Atlas, and Mongoose. To be able to easily display the data received from our database and change the user experience for different users we built our frontend with React allowing us to use map for creating options in our select and data for our lists. 
Our server is coded with Node Express. This allows us to group our routes/endpoints by what they are for, such as, students, coaches, academies. 
Our database is hosted on MongoDB Atlas. This allows us to connect to Heroku and still access our data. Using MongoDB also allowed us to use arrays for some of our data that would be grouped together, such as different resources or books read by the students.
Finally Mongoose gave our database structure. We created our schemas with it so that our data structure remained uniform and we could predict what data we would get back with queries.

## Getting started
You are interested in using our code? Awesome! Here are the instructions to get you on your way:

First after cloning or forking the code in your terminal run
```bash
npm install
```

Next you will need to connect the app to a database platform either local or we would reccommend MongoDB Atlas. Create a .env file for your URI and port. Create a ATLAS_URI or LOCAL_URI for your database and make sure that that the variable matches on the server (index.js file). This variable should look something like this:
```
ATLAS_URI="Atlas URI Here"
```
or
```
LOCAL_URI="mongodb://localhost:27017/databasename"
```

You will also need a port variable for local testing. Our project runs the server on port 5000. If you want to change the port number you will need to change the proxy in the client package.json as well. The variable for the port should look like this:
```
PORT="5000"
```

Finally to start the app on your computer open your terminal again and run
```bash
npm start
```

## Try Our APP
[Open in Heroku]()

## Our Team
Andre Torrealba
Skyler Stevens
Reggie Harris

## License
MIT
