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

    todoApp.setState({todos: []});
    todoApp.handleNewTodo(todoText);

    expect(todoApp.state.todos.length).toBe(1);
    expect(todoApp.state.todos[0].text).toBe(todoText);

  });

  it ('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11, text: "test", completed: false
    };

    var todoApp =
        TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});

    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);

    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    })

  })