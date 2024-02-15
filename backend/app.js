// Ensure express is required
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// file reader
const fs = require("fs");

// Ensure body parser is running
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
