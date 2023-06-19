import "./App.css";
import React from "react";
import Header from "./components/header";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CounterClass from "./components/CounterClass";
import CounterFunction from "./components/CounterFunction";
import Login from "./components/Login";
import AllStudents from "./components/AllStudents";

function App() {
  return (
    // <div className="App">
    //   <h1>Hello React</h1>
    //   <br></br>
    //   <CounterClass/>
    //   <hr></hr>
    //   <CounterFunction/>
    // </div>

    // <div className="page">
    //   <Login/>
    // </div>

    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/add" element={<AddStudent />} />
          <Route path="/" element={<AllStudents />} />
          <Route path="/update/:sid" element={<EditStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
