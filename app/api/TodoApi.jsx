var $ = require('jquery');

module.exports = {
 
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