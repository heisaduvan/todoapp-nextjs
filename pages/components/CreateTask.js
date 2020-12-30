import React, { Component } from "react";
import TaskConsumer from "../../TaskContext";

var uniqid = require("uniqid");

export default class CreateTask extends Component {

  state = {
    newTask: "",
  };

  addNewTask = (dispatch, e) => {
    e.preventDefault();
    if (this.state.newTask == "") {
      window.alert("Task alanı boş olamaz.");
    } else {
      const newTask = {
        id: uniqid(),
        taskDescription: this.state.newTask,
        taskStatus: "Henüz Yapılmadı",
        taskStatusClass:"pending-task"
      };
      dispatch({ type: "ADD_TASK", payload: newTask });
    }
  };

  setNewTask = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask } = this.state;
    return (
      <TaskConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="create-task-container">
              <input
                id="new-task-text"
                className="create-task-input"
                placeholder="Type your task"
                name={newTask}
                onChange={this.setNewTask.bind(this)}
              ></input>
              <button
                className="create-task-button btn btn-primary"
                onClick={this.addNewTask.bind(this, dispatch)}
              >
                Add
              </button>
            </div>
          );
        }}
      </TaskConsumer>
    );
  }
}
