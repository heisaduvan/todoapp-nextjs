import React, { Component } from "react";
import UserConsumer from "../../TaskContext";
import PropTypes from "prop-types";
export default class Task extends Component {
  done = (dispatch,id,e) => {
      dispatch({type:"DONE_TASK",payload:id});
  };
  delete = (dispatch,id,e) => {
    dispatch({type:"DELETE_TASK",payload:id});
};
  render() {
    const { taskDescription, taskStatus, id, taskStatusClass } = this.props;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          const taskClass = "task-container" + " " + taskStatusClass
          const doneButtonVisible = taskStatusClass == "done-task" ? "none" : "inline-block";
          return (
            <div className={ taskClass }>
              <div className="task-container-content">
                <p>{taskDescription}</p>
                <p>{taskStatus}</p>
              </div>
              <div className="task-container-button">
                <button
                  className="task-done"
                  onClick={this.done.bind(this, dispatch,id)}
                  style={{display:doneButtonVisible}}
                >
                  Tamamlandı
                </button>
                <button className="task-cancel" onClick={this.delete.bind(this, dispatch,id)}>Sil</button>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
Task.propTypes = {
  taskDescription: PropTypes.string.isRequired,
  taskStatus: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
Task.defaultProps = {
  taskDescription: "My first task in todo app.",
  taskStatus: "Henüz Yapılmadı.",
};
