var React = require("react");
var {connect} = require('react-redux');

var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value.trim();

    if (todoText.length > 0) {
      this.props.dispatch(actions.addTodo(todoText));
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

export default connect()(AddTodo);
