import { useState } from "react";
import './App.css';

function App() {
  // Array of student names
  const students = ["Ava", "Liam", "Noah", "Sophia", "Ethan"];

  // Start by showing only the first student
  const [count, setCount] = useState(1);

  // Increments count by 1 until all students are displayed
  const handleClick = () => {
    if (count < students.length) {
      setCount(count + 1);
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>Student Names</h1>

      {/* Dynamically render the visible students */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.slice(0, count).map((name, index) => (
          <li
            key={index}
            style={{
              margin: "8px 0",
              padding: "6px 12px",
              background: "#f0f0f0",
              borderRadius: "4px",
              display: "inline-block",
              minWidth: "100px",
              color: "black",
            }}
          >
            {name}
          </li>
        ))}
      </ul>

      {/* Button reveals next name */}
      <button
        onClick={handleClick}
        disabled={count >= students.length}
        style={{
          marginTop: "20px",
          padding: "8px 16px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "4px",
          backgroundColor: count >= students.length ? "#ccc" : "#007BFF",
          color: "black",
          border: "none"
        }}
      >
        Show Next Student
      </button>
    </div>
  );
}

export default App;