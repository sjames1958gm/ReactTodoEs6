var React = require("react");

var Todo = require("Todo")

var TodoList = React.createClass({
  render: function() {
    var {todos, onToggle} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {

        return (
          <p className="container__message">Nothing To Do!</p>
        );
      }
      return todos.map(function(todo, id) {
        return <Todo key={todo.id} {...todo} onToggle={onToggle}/> 
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

module.exports = TodoList;