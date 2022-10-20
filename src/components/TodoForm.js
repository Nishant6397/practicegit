import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ id: Math.floor(Math.random() * 10000), text: input });
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a Todo"
          value={input}
          name="text"
          onChange={handleChange}
          className="todo-input"
        />
        <button className="todo-button">Add Todo</button>
      </form>
    </>
  );
};

export default TodoForm;
