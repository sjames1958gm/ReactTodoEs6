var React = require("react");
var {connect} = require('react-redux');

// var Todo = require("Todo").default;
import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function() {
    // console.log("Props: ", this.props);
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do!</p>
        );
      }
      return todos.map(function(todo, id) {
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
    return {
      todos: state.todos
    };
  }
)(TodoList);
