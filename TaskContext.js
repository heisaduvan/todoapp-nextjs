import React, { Component } from "react";
const TaskContext = React.createContext();
const TaskConsumer = TaskContext.Consumer;
var uniqid = require("uniqid");
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => action.payload !== task.id),
      };
    case "DONE_TASK":
    var task = state.tasks.find(task => action.payload === task.id);
    task.taskStatus = "Tamamlandı";
    task.taskStatusClass = "done-task";
      return state;
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};
export class TaskProvider extends Component {
  state = {
    tasks: [
      {
        id: "sadf",
        taskDescription: "My first task in todo app.",
        taskStatus: "Henüz Yapılmadı.",
        taskStatusClass: "pending-task"
      },
      {
        id: "sadfsadfczx",
        taskDescription: "My second task in todo app.",
        taskStatus: "Henüz Yapılmadı.",
        taskStatusClass: "pending-task"
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <TaskContext.Provider value={this.state}>
        {this.props.children}
      </TaskContext.Provider>
    );
  }
}
export default TaskConsumer;
