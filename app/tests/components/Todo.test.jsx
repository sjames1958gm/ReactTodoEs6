var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");

var Timer = require("Todo");

describe("Todo", () => {
  it('should exist', () => {
    expect(Timer).toExist();
  })
})