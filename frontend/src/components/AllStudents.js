import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllStudents() {
  const [students, setStudents] = useState([]); //empty array

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8060/student/")
        .then((res) => {
          console.log(res.data);
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getStudents();
  }, []);

  // Handele Delete function
  function handleDelete(id) {
    const confirm = window.confirm("Do you want to delete ");

    if (confirm) {
      axios
        .delete("http://localhost:8060/student/delete/" + id)
        .then((res) => {
          alert("Student has deleted sucessfully");

          //get updated list again after deletetion
          axios
            .get("http://localhost:8060/student/")
            .then((res) => {
              setStudents(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="container">
      <br />
      <h2>All Students : {students.length}</h2>
      <br />
      {/* <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        <h2>{student.name}</h2>
                        <p>{student.age}</p>
                        <p>{student.gender}</p>
                    </li>
                ))}
            </ul> */}

      <table
        className="table table-bordered"
        style={{
          width: "100%",
          border: "1px solid #dee2e6",
          borderRadius: "5px",
          boxShadow: "0px 0px 15px 3px rgba(17, 112, 19,0.6)",
        }}
      >
        <thead
          className="table"
          style={{
            backgroundColor: "#0d4a0e",
            color: "white",
            textAlign: "center",
          }}
        >
          <tr>
            <td style={{ paddingLeft: "30px" }}>Name</td>
            <td style={{ textAlign: "center" }}>Age</td>
            <td style={{ textAlign: "center" }}>Gender</td>
            <td style={{ textAlign: "center" }}>Actions</td>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td
                style={{
                  width: "245px",
                  paddingRight: "30px",
                }}
              >
                <Link to={`./update/${student._id}`}>
                  <button
                    type="submit"
                    className="btn btn-warning"
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </button>
                </Link>
                <Link to={"./get/"}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ marginRight: "10px" }}
                  >
                    View
                  </button>
                </Link>
                <button
                  onClick={(e) => handleDelete(student._id)}
                  type="submit"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
