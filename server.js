

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes

const express = require('express');

// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));



// Setup Server

const port = 1409;




// Callback function to complete GET '/all'
function sendData(req, res) {
  res.status(200).send(projectData);

}

// Initialize all route with a callback function
app.get('/all', sendData);


// Post Route

function addData(req, res) {
  projectData = {
    temp: req.body.temp,
    content: req.body.content,
    date: req.body.date,
  }
  res.status(200)
  res.send({ status: "OK" })
}
app.post('/addWeather', addData);


// Callback to debug
function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);

}

const server = app.listen(port, listening);
