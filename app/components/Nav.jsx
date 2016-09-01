var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Todo App</li>
        </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="https://github.com/sjames1958gm" target="_blank">Stephen James</a></li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Nav;   
