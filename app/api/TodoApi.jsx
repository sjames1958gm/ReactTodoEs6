var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    return todos;
  },
  getTodos: function() {
    var strTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(strTodos);
    }
    catch(e) {
      console.log("Failed to get todos: " + e);
    }

    if ($.isArray(todos)) {
      return todos;
    }
    else {
      return [];
    }
  },
  
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter((todo) => {
      return todo.text.toLowerCase().indexOf(searchText) !== -1;
    })

    filteredTodos.sort(function(a, b) {
      if (a.completed === b.completed) {
        return 0;
      } 
      else if (a.completed) {
        return 1;
      }
      else {
        return -1;
      }
    });

    return filteredTodos;
  }
}