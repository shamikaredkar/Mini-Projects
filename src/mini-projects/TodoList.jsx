import React, { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const addTodo = () => {
    setTodo([...todo, input]);
    setInput("");
  };
  return (
    <div>
      <input
        onChange={(e) => {
          handleInput(e);
        }}
        value={input}
        type='text'
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
