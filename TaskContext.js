import React, { Component } from "react";
const TaskContext = React.createContext();
const TaskConsumer = TaskContext.Consumer;
import PublicConstant from "./PublicConstant";
var uniqid = require("uniqid");
const reducer = (state, action) => {
  switch (action.type) {
    case PublicConstant.TaskDelete:
      return {
        ...state,
        tasks: state.tasks.filter((task) => action.payload !== task.id),
      };
    case PublicConstant.TaskDone:
      var task = state.tasks.find((task) => action.payload === task.id);
      task.taskStatus = PublicConstant.doneTask;
      task.taskStatusClass = "done-task";
      return state;
    case PublicConstant.TaskAdd:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case PublicConstant.ShowModal:
      state.showModal = action.payload;
      return state;
    case PublicConstant.CreateNewList:
      return {
        ...state,
        todolist: [...state.todolist, action.payload],
      };
      case PublicConstant.ChangeSelectedList:
        state.selectedListId = action.payload;
        return state;
    default:
      return state;
  }
};
export class TaskProvider extends Component {
  state = {
    tasks: [
      {
        id: uniqid(),
        taskDescription: "My first task in todo app.",
        taskStatus: PublicConstant.waitingTask,
        taskStatusClass: "pending-task",
      },
      {
        id: uniqid(),
        taskDescription: "My second task in todo app.",
        taskStatus: PublicConstant.waitingTask,
        taskStatusClass: "pending-task",
      },
      {
        id: uniqid(),
        taskDescription: "My third task in todo app.",
        taskStatus: PublicConstant.waitingTask,
        taskStatusClass: "pending-task",
      },
    ],
    todolist: [
      {
        id: uniqid(),
        name: "Today",
      },
      {
        id: uniqid(),
        name: "Tomorrow",
      },
    ],
    showModal: false,
    selectedListId : '',
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
