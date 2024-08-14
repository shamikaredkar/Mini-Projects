import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <h1>User Input Form</h1>
      <h4>{name}</h4>
      <input
        onChange={() => {
          setName(handleInputChange);
        }}
        type='text'
      ></input>
    </>
  );
}
