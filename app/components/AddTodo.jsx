var React = require("react");

var AddTodo = React.createClass({
  propTypes: {
    onNewTodo: React.PropTypes.func.isRequired
  },

  onSubmit: function(e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0 && this.props.onNewTodo) {
      this.props.onNewTodo(todoText);
      this.refs.todoText.value = "";
    }
    else {
      this.refs.todoText.focus();
    }
  },
  
  render: function() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="addtodo-form">
          <input type="text" ref="todoText" placeholder="Enter New Todo"></input>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
