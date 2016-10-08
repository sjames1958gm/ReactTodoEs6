var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require('react-redux');
var moment = require('moment');
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");

import {configure} from 'configureStore';
import TodoList from 'TodoList';
import Todo from "Todo";

describe("TodoList", () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  })

  it('should render a todo item for each todo', () => {
    var todos = [{
      id:1, 
      text:"item1", 
      completed: false,
      completedAt: undefined,
      createdAt: moment().unix()
    },
    {
      id:2,
      text:"item2", 
      completed: false,
      completedAt: undefined,
      createdAt: moment().unix()
    }];

    var store = configure({ todos });
    

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoList/>
      </Provider>
    );

    var todoList = 
      TestUtils.scryRenderedComponentsWithType(provider, TodoList)[0];
    var todosComponents = 
      TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
    
  });

  it('should render a message when no todos', () => {
    var store = configure();
    var todos = [];

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoList/>
      </Provider>
    );

    var todoList = 
      TestUtils.scryRenderedComponentsWithType(provider, TodoList)[0];
    var todosComponents = 
      TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
})