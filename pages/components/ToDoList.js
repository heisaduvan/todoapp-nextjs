import React, { Component } from "react";
import TaskConsumer from "../../TaskContext";
import ToDoListItem from "./ToDoListItem";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
var uniqid = require("uniqid");
export default class ToDoList extends Component {
  state = {
    todoListName: "",
  };
  handleModalShow(dispatch, val, e) {
    e.preventDefault();
    this.setState({
        todoListName : ""
    });
    dispatch({ type: "SET_SHOW_MODAL", payload: val });
  }
  setToDoListName = (e) => {
    this.setState({
        todoListName : e.target.value
    });
  }
  createNewToDoList(dispatch,e){
    e.preventDefault();
    const newItem = {
        id : uniqid(),
        name : this.state.todoListName
    }
    dispatch({ type: "CREATE_NEW_LIST", payload: newItem });
    this.handleModalShow.bind(this,dispatch,false);
  }
  render() {
    return (
      <TaskConsumer>
        {(value) => {
          const { todolist, showModal, dispatch } = value;
          const {todoListName} = this.state;
          return (
            <div>
              <Button
                className="btn btn-primary create-new-list"
                onClick={this.handleModalShow.bind(this, dispatch, true)}
              >
                Craete New ToDo List
              </Button>
              <Modal
                show={showModal}
                onHide={this.handleModalShow.bind(this, dispatch, false)}
              >
                <Modal.Header>
                  <Modal.Title>Type your to-do list name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <InputGroup
                    size="lg"
                    name={todoListName}
                    onChange={this.setToDoListName.bind(this)}
                  >
                    <FormControl
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={this.handleModalShow.bind(this, dispatch, false)}
                  >
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={this.createNewToDoList.bind(this,dispatch)}
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              {todolist.map((item) => {
                return (
                  <ToDoListItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                  ></ToDoListItem>
                );
              })}
            </div>
          );
        }}
      </TaskConsumer>
    );
  }
}
