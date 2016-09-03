var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");

var AddTodo = require("AddTodo");

describe("AddTodo", () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  })

  it ("should get called on valid todo", () => {
    var spy = expect.createSpy();
    var addTodo =
        TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = 'New Todo';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('New Todo');
  });

  it ("should not get called on empty input", () => {
    var spy = expect.createSpy();
    var addTodo =
        TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

   expect(spy).toNotHaveBeenCalled();

  });
})