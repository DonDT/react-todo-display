import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { handleChange, handleSubmit, item, editItem } = this.props;
    return (
      <div className="card card-body my-3 center border-rad">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white border-rad">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize border-rad"
              placeholder="add item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "btn btn-success mt-3 border-rad text-uppercase"
                : "btn btn-primary mt-3 border-rad text-uppercase"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
