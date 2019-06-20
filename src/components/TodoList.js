import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div style={{ marginTop: "150px" }}>
        <ul className="list-group my-5 ">
          <h3 className="text-capitalize text-center font-design">
            Activity<span style={{ textTransform: "lowercase" }}>(s)</span> list
          </h3>
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}
          <button
            type="button"
            className="btn btn-danger center text-uppercase mt-5"
            onClick={clearList}
          >
            clearList
          </button>
        </ul>
      </div>
    );
  }
}
