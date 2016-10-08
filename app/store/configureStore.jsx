var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = (intialState = {}) => {

  var reducer = redux.combineReducers({
   searchText: searchTextReducer,
   showCompleted: showCompletedReducer,
   todos: todosReducer
  });

  return redux.createStore(reducer, 
    intialState, 
    redux.compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f));
}