var React = require("react");

var TodoList = require("TodoList");
var AddTodo = require("AddTodo")

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1, 
          text: 'Do more'
        },
        {
          id: 2, 
          text: 'Do even more'
        },
        {
          id: 3, 
          text: 'Walk the cat'
        },
        {
          id: 4, 
          text: 'Clean the dog box'
        }
      ]
    };
  },

  handleNewTodo: function(todo) {
    console.log(todo);
  },

  render: function() {
    var {todos} = this.state;
    return (
      <div  className="columns medium-8 large-8 small-centered">
        <TodoList todos={todos}/>
        <AddTodo onNewTodo={this.handleNewTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;