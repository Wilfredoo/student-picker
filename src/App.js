import React, { useState } from "react";
import "./App.css";

  let studentList = [
    "Inna",
    "Sebastian",
    "Zsofia T.",
    "Fakhira",
    "Annika",
    "Said",
    "Hamid",
    "Omar",
    "Guilherme",
    "Sofia D.",
    "Angel",
  ];

function App() {
  const [student, setStudent] = useState(null);
  const [ranOut, setRanOut] = useState(null);
  const anotherStudentList = []

  function startAgain() {
    console.log("another student list", anotherStudentList)
    studentList = anotherStudentList
    setRanOut(false)
}

  function pickRandomStudent() {
    if (studentList.length === 0) setRanOut(true);
    const randomIndex = Math.floor(Math.random() * studentList.length);
    const randomStudent = studentList[randomIndex];
    setStudent(randomStudent);
    anotherStudentList.push(studentList.splice(randomIndex, 1));
  }

  return (
    <div className="App">
      <h1>Student Picker</h1>
      <h2>A better way to pick students</h2>
      <h3>Annika was here ;)</h3>
      <div className="flex">
      <img src="https://w7.pngwing.com/pngs/380/764/png-transparent-paper-box-computer-icons-symbol-random-icons-miscellaneous-angle-text-thumbnail.png" />
      {!ranOut && (
        <button onClick={() => pickRandomStudent()}>
          Click Here to Pick Someone!
        </button>
      )}
      {student && <p className="student">The lucky one is:<br /><br /> {student}</p>}
      {ranOut && (
        <>
          <button onClick={() => startAgain()}>Start Again</button>
          <p>You ran out of students!</p>
        </>
      )}
      </div>
    </div>
  );
}

export default App;
