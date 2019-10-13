const express = require("express");
const http = require("http");

// get the flag colors
const allFlags = require('flag-colors/data/flagColors.json');

// create an express app
const app = express();

// Serve the current directory as a static website
// This allows us to use HTML, JavaScript, etc
app.use(express.static(__dirname));

// When the user hits the home page
app.get("/flag", (req, res) => {
  // get a random flag from the dataset
  const flag = allFlags[Math.floor(Math.random() * allFlags.length)];
  // output JSON to the response
  res.json({
    name: flag.name,
    colors: flag.colors.map(c => c.hex)
  });
});

// Create a server
const server = http.createServer(app);

// Start listening on a standard port
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("Server listening on http://localhost:" + port);
});
