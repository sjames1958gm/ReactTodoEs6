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
            return <Todo key={todo.id} text={todo.text} id={id + 1}/>
          })}
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;