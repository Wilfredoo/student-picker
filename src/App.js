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
  const [randomStudentList, setRandomStudentList] = useState(null);

  const anotherStudentList = [];

  function startAgain() {
    console.log("another student list", anotherStudentList);
    studentList = anotherStudentList;
    setRanOut(false);
  }

  function pickRandomStudent() {
    if (studentList.length === 0) setRanOut(true);
    const randomIndex = Math.floor(Math.random() * studentList.length);
    const randomStudent = studentList[randomIndex];
    setStudent(randomStudent);
    anotherStudentList.push(studentList.splice(randomIndex, 1));
  }

  function makeTeams() {
    const randomStudentList = shuffle(studentList);
    setRandomStudentList(randomStudentList);
    // console.log("student list random", randomStudentList);
    // const bigArray = [];
    // let smallArray = [];
    // for (let j = 0; j < 6; j++) {
    //   console.log("small array", smallArray);
    //   bigArray.push(smallArray);
    //   smallArray = [];
    //   for (let i = 0; i <= 2; i++) {
    //     console.log("random list", randomStudentList);
    //     smallArray.push(randomStudentList[i]);
    //     randomStudentList.splice(i, 1);
    //   }
    // }
    // console.log("big array", bigArray);
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
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
        <button onClick={() => makeTeams()}>Click Here to make teams!</button>
        {student && (
          <p className="student">
            The lucky one is:
            <br />
            <br /> {student}
          </p>
        )}
        {ranOut && (
          <>
            <button onClick={() => startAgain()}>Start Again</button>
            <p>You ran out of students!</p>
          </>
        )}
        {randomStudentList &&
          randomStudentList.map((data, index) => {
            return (
              <>
                <p>{data}</p>
                {(index === 2 || index === 5 || index === 8) && <p>---</p>}
              </>
            );
          })}
      </div>
    </div>
  );
}

export default App;
