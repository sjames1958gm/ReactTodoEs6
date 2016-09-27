var React = require("react");
var moment = require('moment');

var Todo = React.createClass({
  nop: () => {},

  render: function(timestamp) {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var renderDate = () => {
      var message = "Created: ";
      var timestamp = createdAt;

      if (completed) {
        message = "Completed: ";
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a'); 
    };

    return (
      <div onClick={() => this.props.onToggle(id)} >
        <input type="checkbox" checked={completed} onChange={this.nop}/>
        <span>{text}</span>
        <span>{renderDate()}</span>
      </div>
    );
  }
});

module.exports = Todo; 