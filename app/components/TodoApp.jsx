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
          text: 'Do more',
          completed: false
        },
        {
          id: uuid(), 
          text: 'Do even more',
          completed: true
        },
        {
          id: uuid(), 
          text: 'Walk the cat',
          completed: false
        },
        {
          id: uuid(), 
          text: 'Clean the dog box',
          completed: true
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
        text: todo,
        completed: false
      }]
    });
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted, 
      searchText: searchText.toLowerCase()
    });
  },

  handleToggle: function(id) {

    var todos = this.state.todos.map((t) => {
      if (t.id === id) {
        t.completed = !t.completed;
      }
      return t;
    })
    this.setState({todos: todos});
  },

  render: function() {
    var {todos} = this.state;
    return (
      <div  className="columns medium-8 large-8 small-centered">
        <TodoSearch onChange={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <AddTodo onNewTodo={this.handleNewTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;