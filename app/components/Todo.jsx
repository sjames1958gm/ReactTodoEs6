var React = require("react");

var Todo = React.createClass({
  render: function() {
    return (
      <div>
        <span>{this.props.id}. </span>
        <span>{this.props.text}</span>
      </div>
    );
  }
});

module.exports = Todo;