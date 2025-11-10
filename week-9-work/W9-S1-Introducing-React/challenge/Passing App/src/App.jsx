import { useState } from "react";
import './App.css';
import Student from './components/Student';

function App() {
  // Array of student objects with name and age
  const students = [
    { name: "Ava", age: 20 },
    { name: "Liam", age: 22 },
    { name: "Noah", age: 19 },
    { name: "Sophia", age: 23 },
    { name: "Ethan", age: 21 },
    { name: "Mia", age: 18 },
  { name: "Oliver", age: 24 },
  { name: "Isabella", age: 20 },
  { name: "Lucas", age: 22 },
  { name: "Amelia", age: 19 },
  { name: "Mason", age: 25 },
  { name: "Harper", age: 21 },
  { name: "Logan", age: 23 },
  { name: "Ella", age: 20 },
  { name: "James", age: 22 },
  { name: "Charlotte", age: 19 },
  { name: "Benjamin", age: 24 },
  { name: "Lily", age: 18 },
  { name: "Jacob", age: 21 },
  { name: "Zoe", age: 20 },
  { name: "Michael", age: 23 },
  { name: "Hannah", age: 22 },
  { name: "Alexander", age: 24 },
  { name: "Grace", age: 19 },
  { name: "Daniel", age: 21 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Show only one student at a time
  const [selectedStudent, setSelectedStudent] = useState(""); // Stores clicked student name

  // Function passed to child to handle button click
  const onClickStudent = (studentName) => {
    setSelectedStudent(studentName);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % students.length;
    setCurrentIndex(nextIndex);
    setSelectedStudent(""); // Reset displayed student on next
  };

  const currentStudent = students[currentIndex];

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>Student Viewer</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <Student 
          name={currentStudent.name} 
          age={currentStudent.age} 
          onClickStudent={onClickStudent} 
        />
      </ul>

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
          border: "none"
        }}
      >
        Next Student
      </button>

      {selectedStudent && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          Selected Student: {selectedStudent}
        </p>
      )}
    </div>
  );
}

export default App;
