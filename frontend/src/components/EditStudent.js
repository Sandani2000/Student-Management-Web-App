import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function EditStudent() {
  const id = useParams();
  const [student, setStudent] = useState(null);
  const [updatedStudent, setUpdatedStudent] = useState({
    name: "",
    age: "",
    gender: "",
  });
  // const history = useHistory(); // initialize the useHistory hook

  useEffect(() => {
    function getStudent() {
      axios
        .get("http://localhost:8090/student/get/" + id)
        .then((res) => {
          console.log(res.data);
          setStudent(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getStudent();
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put("http://localhost:8090/student/:sid", updatedStudent)
      .then((res) => {
        console.log(res.data);
        // Redirect to the all students page after successful update
        // history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div className="container">
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Student Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Student Name"
            value={student.name}
            onChange={(e) => {
              setUpdatedStudent({ updatedStudent, name: e.target.value });
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
              setUpdatedStudent({ updatedStudent, age: e.target.value });
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
              setUpdatedStudent({ updatedStudent, gender: e.target.value });
            }}
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
}
