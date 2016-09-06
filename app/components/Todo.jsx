var React = require("react");

var Todo = React.createClass({
  nop: () => {},

  render: function() {
    var {id, text, completed} = this.props;
    return (
      <div onClick={() => this.props.onToggle(id)} >
        <input type="checkbox" checked={completed} onChange={this.nop}/>
        <span>{text}</span>
      </div>
    );
  }
});

module.exports = Todo;