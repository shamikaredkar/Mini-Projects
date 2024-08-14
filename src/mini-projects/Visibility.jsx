import React, { useState } from "react";

export default function Visibility() {
  const [text, showText] = useState(true);

  return (
    <div>
      {text ? <p>Toggle Me</p> : <p></p>}
      <button
        onClick={() => {
          showText(!text);
        }}
      >
        Show/Hide Text
      </button>
    </div>
  );
}
