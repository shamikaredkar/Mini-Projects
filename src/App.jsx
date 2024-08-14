import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./mini-projects/Counter";
import Form from "./mini-projects/Form";
import Toggle from "./mini-projects/Toggle";

function App() {
  return (
    <>
      <h1>Mastering React Hooks</h1>
      {/* <Counter /> */}
      {/* <Form /> */}
      <Toggle />
    </>
  );
}

export default App;
