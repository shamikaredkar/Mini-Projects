import React, { useState } from "react";

export default function StopWatch() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>Project 1: Counter</h1>
      <h3>{number}</h3>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        Decrement
      </button>
      {number !== 0 && (
        <button
          onClick={() => {
            setNumber(0);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
