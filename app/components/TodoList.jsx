var React = require("react");
var {connect} = require('react-redux');

// var Todo = require("Todo").default;
import Todo from 'Todo';
var TodoApi = require("TodoApi");

export var TodoList = React.createClass({
  render: function() {
    // console.log("Props: ", this.props);
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do!</p>
        );
      }
      return TodoApi.filterTodos(todos, showCompleted, searchText)
        .map(function(todo, id) {
          return <Todo key={todo.id} {...todo}/> 
      })}
    return (
      <div>
        <ul>
          {renderTodos()}
        </ul>
      </div>
    );
  }
});

export default connect(
  (state) => { 
    return state;
  }
)(TodoList);
