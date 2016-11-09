import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} 
  from 'reducers';

export var configure = (intialState = {}) => {

  var reducer = redux.combineReducers({
   searchText: searchTextReducer,
   showCompleted: showCompletedReducer,
   todos: todosReducer,
   auth: authReducer
  });

  return redux.createStore(reducer, 
    intialState, 
    redux.compose(
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f));
}
