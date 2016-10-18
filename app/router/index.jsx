var React = require("react");
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import firebase from 'app/firebase';

import TodoApp from 'TodoApp';
import Login from 'Login';

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
}

var isLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todo');
  }
  next();
}

export default (
  <Router history={hashHistory}>
    <Route path="/" onEnter={isLoggedIn}>
      <Route path="/todos" component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login}/>
    </Route>
  </Router>
);