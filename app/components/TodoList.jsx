var React = require("react");
var {connect} = require('react-redux');

// var Todo = require("Todo").default;
import Todo from 'Todo';
var TodoApi = require("TodoApi");

export var TodoList = React.createClass({
  render: function() {
    // console.log("Props: ", this.props);
    var {todos, showCompleted, searchText} = this.props;
    var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
    var renderTodos = () => {
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do!</p>
        );
      }
      return filteredTodos.map(function(todo, id) {
        return <Todo key={todo.id} {...todo}/> 
      })};
    return (
      <div>
        <ul>
          {renderTodos()}
        </ul>
      </div>
    );
  }
});

export default connect(
  (state) => { 
    return state;
  }
)(TodoList);
