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

  it('should render', () => {
    var todos = [{
      id:1, text:"item1",
    },
    {
      id:2, text:"item2",
    }];

    var todoList = TestUtils.renderIntoDocument(
      <TodoList todos={todos}/>
    );

    var todosComponents = 
      TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
    
  });
})