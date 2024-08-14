import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>Simple Counter</h1>
      <h3>{number}</h3>
      <button
        id='increment'
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increment
      </button>
      <button
        id='decrement'
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        Decrement
      </button>
      {number !== 0 && (
        <button
          id='reset'
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
