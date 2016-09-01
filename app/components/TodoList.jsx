var React = require("react");

var Todo = require("Todo")

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    return (
      <div>
      Todo List
        <ul>
          {todos.map(function(todo, id) {
            return <Todo key={todo.id} {...todo}/>
          })}
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;