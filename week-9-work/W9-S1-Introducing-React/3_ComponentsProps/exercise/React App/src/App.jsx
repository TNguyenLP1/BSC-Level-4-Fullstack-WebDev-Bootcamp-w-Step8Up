import React, { useState } from "react";
import "./App.css";
import Student from "./components/Student";

function App() {
  // Array of students
  const students = [
    { name: "Ava", age: 20 },
    { name: "Liam", age: 22 },
    { name: "Noah", age: 19 },
    { name: "Sophia", age: 23 },
    { name: "Ethan", age: 21 },
  ];

  const [index, setIndex] = useState(0); // current student index

  // Show next student
  const handleNext = () => {
    setIndex((prev) => (prev + 1 < students.length ? prev + 1 : 0)); // loop back to first
  };

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>Student Details</h1>

      {/* Render only the current student */}
      <Student name={students[index].name} age={students[index].age} />

      <button
        onClick={handleNext}
        style={{
          marginTop: "20px",
          padding: "8px 16px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "4px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
        }}
      >
        Next Student
      </button>
    </div>
  );
}

export default App;