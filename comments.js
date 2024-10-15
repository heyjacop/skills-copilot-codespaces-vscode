// create a web server

// import the express module
const express = require('express');

// create an express app
const app = express();

// set the port
const port = 3000;

// create a route for /
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// create a route for /comments
app.get('/comments', (req, res) => {
  res.send('Comments');
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});