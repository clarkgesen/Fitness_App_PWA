const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');
const routes = require("./routes")

const PORT = process.env.PORT || 3800;

const db = require("./models");
const databaseName = 'workouts';

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout")

app.use(express.static("public"));
app.use('/', routes)
// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});