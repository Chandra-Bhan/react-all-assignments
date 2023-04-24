import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSlice } from "..";

function Todos() {
  const [input, setInput] = useState("");
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const task = { id: Date.now(), title: input, completed: false };
      dispatch(todosSlice.actions.addTask(task));
      setInput("");
    }
    console.log(tasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => hasSelectionSupport(e.target.value)}
        name=""
        id=""
      />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default Todos;
