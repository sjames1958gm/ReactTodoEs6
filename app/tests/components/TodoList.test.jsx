var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");

var TodoList = require("TodoList");
var Todo = require("Todo")

describe("TodoList", () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  })

  it('should render a todo item for each todo', () => {
    var todos = [{
      id:1, text:"item1", completed: false
    },
    {
      id:2, text:"item2", completed: false
    }];

    var todoList = TestUtils.renderIntoDocument(
      <TodoList todos={todos}/>
    );

    var todosComponents = 
      TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
    
  });

  it('should render a message when no todos', () => {
    var todos = [];

    var todoList = TestUtils.renderIntoDocument(
      <TodoList todos={todos}/>
    );

    var todosComponents = 
      TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
})