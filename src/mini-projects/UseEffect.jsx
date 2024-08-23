import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);

  //The document re-renders for any reason that the component re-renders even if it's unrelated
  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  //The document updates everytime we increment or decrement (on every re-render)
  useEffect(() => {
    document.title = `Count: ${count}`;
  }),
    [];

  //It's the same as the first one but it only runs when we make changes to the value in the dependency
  //If teh value of count changes for any reason, do the side code
  useEffect(() => {
    document.title = `Count: ${count}`;
  }),
    [count];

  function handleIncrement() {
    setCount((c) => c + 1);
  }
  function handleDecrement() {
    setCount((c) => c - 1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
