const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
// app.use(express.json());

// const dotenv = require("dotenv");
// dotenv.config();

const PORT = process.env.PORT || 8060;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  // useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection success!");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port no : ${PORT}`);
});

// -----------------------------------------------
const studentRouter = require("./routes/students.js");

app.use("/student", studentRouter); //http://localhost:8076/student
