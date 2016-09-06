var React = require("react");

var Todo = require("Todo")

var TodoList = React.createClass({
  render: function() {
    var {todos, onToggle} = this.props;
    return (
      <div>
      Todo List
        <ul>
          {todos.map(function(todo, id) {
            return <Todo key={todo.id} {...todo} 
              onToggle={onToggle}  />
          })}
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;