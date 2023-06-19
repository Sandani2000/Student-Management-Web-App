import React, { useState } from "react";
import axios from "axios";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    e.preventDefault(); // to prevent normal behaviour of submit

    const newStudent = {
      name,
      age,
      gender,
    };

    // console.log(newStudent);

    axios
      .post("http://localhost:8060/student/add", newStudent)
      .then(() => {
        alert("Student added");
        setName = "";
        setAge = "";
        setGender = "";
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <hr></hr>
      <form onSubmit={sendData}>
        <div className="form-group">
          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Student Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <br />

        <div className="form-group">
          <label htmlFor="age">Student Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Enter Student Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <br />

        <div className="form-group">
          <label htmlFor="gender">Student Gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            placeholder="Enter Student Gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
