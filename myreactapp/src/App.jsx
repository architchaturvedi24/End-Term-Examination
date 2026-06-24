import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const handleCheck = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult(" Please enter a valid number.");
      return;
    }
    setResult(isPrime(num) ? `${num} is a Prime Number ` : `${num} is NOT a Prime Number `);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Prime Number Checker</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={handleCheck}
        style={{ marginLeft: "10px", padding: "10px", fontSize: "16px" }}
      >
        Check
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{result}</p>
    </div>
  );
}

export default App;
