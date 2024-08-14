import React, { useState } from "react";

export default function Toggle() {
  const [state, setState] = useState(false);
  return (
    <>
      {state ? <h4>ON</h4> : <h4>OFF</h4>}
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        Toggle
      </button>
    </>
  );
}
