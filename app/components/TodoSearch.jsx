var React = require("react");
var {connect} = require('react-redux');

import * as actions from 'actions';

export class TodoSearch extends React.Component {
  render() {
    var {showCompleted, searchText, dispatch} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" 
            placeholder="Search todos" value={searchText} 
            onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText)); }}>
          </input>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted"
              checked={showCompleted} 
              onChange={() => {
                dispatch(actions.toggleShowCompleted()); }}>
            </input>
            Show Completed
          </label>
        </div>
      </div>
    );
  }
};

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);