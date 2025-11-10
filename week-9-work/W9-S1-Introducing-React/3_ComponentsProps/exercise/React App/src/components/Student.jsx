import React from "react";

/**
 * Student component
 * Displays the student's name and age as separate highlighted bullet points.
 * Shows "Mature Student" in bold red if age > 21.
 */
function Student({ name, age }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {/* Name bullet */}
      <li
        style={{
          backgroundColor: "#00e1ffff",
          padding: "8px 12px",
          marginBottom: "8px",
          fontWeight: "bold",
          borderRadius: "4px",
          display: "inline-block",
          minWidth: "200px",
          color: "black",
        }}
      >
        Name: {name}
      </li>

      {/* Age bullet with Mature Student if applicable */}
      <li
        style={{
          backgroundColor: "#ff9d00ff",
          padding: "8px 12px",
          marginBottom: "8px",
          fontWeight: "bold",
          borderRadius: "4px",
          display: "inline-block",
          minWidth: "200px",
          color: "black",
        }}
      >
        Age: {age}{" "}
        {age > 21 && (
          <span style={{ color: "red", fontWeight: "bold", marginLeft: "8px" }}>
            Mature Student
          </span>
        )}
      </li>
    </ul>
  );
}

export default Student;