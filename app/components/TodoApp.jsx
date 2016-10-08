var React = require("react");
var uuid = require("node-uuid");
var moment = require('moment');

import TodoList from "TodoList";

var TodoApi = require("TodoApi");
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
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      }]
    });
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted, 
      searchText: searchText.toLowerCase()
    });
  },

  // handleToggle: function(id) {

  //   var todos = this.state.todos.map((t) => {
  //     if (t.id === id) {
  //       t.completed = !t.completed;
  //       t.completedAt = (t.completed) ? moment().unix() : undefined;
  //     }
  //     return t;
  //   })
  //   this.setState({todos: todos});
  // },

  render: function() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="columns  small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onChange={this.handleSearch}/>
              <TodoList/>
              <AddTodo onNewTodo={this.handleNewTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;