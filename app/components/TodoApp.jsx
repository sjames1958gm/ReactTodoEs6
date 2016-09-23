var React = require("react");
var uuid = require("node-uuid");

var TodoApi = require("TodoApi");

var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoApi.getTodos()
    }
  },

  componentDidUpdate: function() {
    TodoApi.setTodos(this.state.todos);
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
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
    return (
      <div  className="columns medium-8 large-8 small-centered">
        <TodoSearch onChange={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
        <AddTodo onNewTodo={this.handleNewTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;