export default function Student({ name, age, onClickStudent }) {
  return (
    <li
      style={{
        margin: "12px 0",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        display: "inline-block",
        minWidth: "200px",
      }}
    >
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Age:</strong> {age}{" "}
        {age > 21 && (
          <span style={{ color: "red", fontWeight: "bold" }}>Mature Student</span>
        )}
      </div>
      <button
        onClick={() => onClickStudent(name)}
        style={{
          marginTop: "8px",
          padding: "6px 12px",
          cursor: "pointer",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#28a745",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Select Student
      </button>
    </li>
  );
}
