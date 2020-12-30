import React, { Component } from "react";
import CreateTask from "./components/CreateTask";
import "../node_modules/normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.module.css";
import TaskList from "./components/TaskList";
import ToDoList from "./components/ToDoList";
export default function Home() {
  return (
    <div className="container">
      <div className="container-left">
        <ToDoList></ToDoList>
      </div>
      <div className="container-right">
        <CreateTask></CreateTask>
        <TaskList></TaskList>
      </div>
    </div>
  );
}
