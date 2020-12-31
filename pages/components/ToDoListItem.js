import React, { Component } from "react";
import PropTypes from "prop-types";
import TaskConsumer from "../../TaskContext";
import PublicConstant from "../../PublicConstant";
export default class ToDoListItem extends Component {
  changeSelectedList = (dispatch,id, e) => {
    
    const action = {
      type : PublicConstant.ChangeSelectedList,
      payload : id
    };
    dispatch(action);
  };
  render() {
    const { id, name } = this.props;
    return (
      <TaskConsumer>
        {(value) => {
          const {selectedListId,dispatch} = value;
          const selectedListClass = selectedListId == id ? "green" : null;
          return (<div className={"todo-list-item " + selectedListClass} onClick={this.changeSelectedList.bind(this, dispatch,id)}>
            <h4>{name.toUpperCase()}</h4>
          </div>);
        }}
      </TaskConsumer>
    );
  }
}
ToDoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
ToDoListItem.defaultProps = {
  name: "Noname List",
};
