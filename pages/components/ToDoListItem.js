import React, { Component } from "react";
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";
export default class ToDoListItem extends Component {
  render() {
    const { id, name } = this.props;
    return <div className="todo-list-item">
        <h4>
            {name.toUpperCase()}
        </h4>
    </div>;
  }
}
ToDoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
ToDoListItem.defaultProps = {
  name: "Noname List",
};
