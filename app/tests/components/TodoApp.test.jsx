var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");

var TodoApp = require("TodoApp");

describe("TodoApp", () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  })

  it ('should update todo list on add', () => {
    var todoText = "test todo";
    var todoApp =
        TestUtils.renderIntoDocument(<TodoApp/>);
    var $el = $(ReactDOM.findDOMNode(todoApp));

    todoApp.setState({todos: []});
    todoApp.handleNewTodo(todoText);

    it ('should have one entry', () => {
      expect(todoApp.getState.todos.length).toBe(1);
      expect(todoApp.getState.todos[0]).toBe(todoText);
    })


  });
})