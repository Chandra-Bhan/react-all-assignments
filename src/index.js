import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// export const todosSlice = createSlice({
//   name: "todos",
//   initialState: {
//     tasks: [],
//   },
//   reducers: {
//     addTask: (state, action) => {
//       state.tasks.push(action.payload);
//     },
//     toggleTask: (state, action) => {
//       const index = state.tasks.findIndex((task) => task.id === action.payload);
//       state.tasks[index].completed = !state.tasks[index].completed;
//     },
//     deleteTask: (state, action) => {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload);
//     },
//   },
// });

// // export const { addTask, toggleTask, deleteTask } = todosSlice.actions;

// export const state = configureStore({
//   reducers: {
//     [todosSlice.name]: todosSlice.reducer,
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
