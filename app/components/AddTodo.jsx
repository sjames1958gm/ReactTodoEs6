import React from "react";
import * as Redux from 'react-redux';

var actions = require('actions');

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value.trim();

    if (todoText.length > 0) {
      this.props.dispatch(actions.startAddTodo(todoText));
      this.refs.todoText.value = "";
    }
    else {
      this.refs.todoText.focus();
    }
  }
  
  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="addtodo-form">
          <input type="text" ref="todoText" placeholder="Enter New Todo"></input>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
};

export default Redux.connect()(AddTodo);
