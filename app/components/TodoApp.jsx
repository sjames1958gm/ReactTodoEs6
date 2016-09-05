var React = require("react");
var uuid = require("node-uuid");

var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: uuid(), 
          text: 'Do more'
        },
        {
          id: uuid(), 
          text: 'Do even more'
        },
        {
          id: uuid(), 
          text: 'Walk the cat'
        },
        {
          id: uuid(), 
          text: 'Clean the dog box'
        }
      ],
      showCompleted: false,
      searchText: ""
    };
  },

  handleNewTodo: function(todo) {
    this.setState({
      todos: [...this.state.todos, 
      {
        id: uuid(),
        text: todo
      }]
    });
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted, 
      searchText: searchText.toLowerCase()
    });
  },

  render: function() {
    var {todos} = this.state;
    return (
      <div  className="columns medium-8 large-8 small-centered">
        <TodoSearch onChange={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onNewTodo={this.handleNewTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;