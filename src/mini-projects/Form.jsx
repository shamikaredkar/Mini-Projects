import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState();
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input
        type='text'
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <p>Input text: {name}</p>
    </div>
  );
}
