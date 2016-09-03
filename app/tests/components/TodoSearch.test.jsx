var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");

var TodoSearch = require("TodoSearch");

describe("TodoSearch", () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  })

  it ("should get called on any text", () => {
    var searchText = "new text";
    var spy = expect.createSpy();
    var todoSearch =
        TestUtils.renderIntoDocument(<TodoSearch onChange={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    
    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it ("should get called on check", () => {
    var searchText = "";
    var spy = expect.createSpy();
    var todoSearch =
        TestUtils.renderIntoDocument(<TodoSearch onChange={spy}/>);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, searchText);
  });

});