import React from "react";
import * as Redux from 'react-redux';
import moment from 'moment';
import * as actions from 'actions';

export class Todo extends React.Component {

  nop () {}

  render() {
    var timestamp;
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? "todo todo-completed" : "todo";
    var renderDate = () => {
      var message = "Created: ";
      var timestamp = createdAt;

      if (completed) {
        message = "Completed: ";
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a'); 
    };

    return (
      <div className={todoClassName} onClick={() => 
          dispatch(actions.startToggleTodo(id, !completed))} >
        <div>
          <input type="checkbox" checked={completed} onChange={this.nop}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
};

export default Redux.connect()(Todo);