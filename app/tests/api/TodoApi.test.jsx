var expect = require("expect");

var TodoApi = require("TodoApi");

describe("TodoApi", () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  })

  it('should exist', () => {
    expect(TodoApi).toExist();
  });

  describe("setTodos", () => {

    it("should update valid todos array", () => {
      var todos = [
        { id: 11, text: "test", completed: false }
      ];

      TodoApi.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);

    })

    it("should not update invalid todos array", () => {
      var todos = { id: 11, text: "test", completed: false };

      TodoApi.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(null);

    })

  })

  describe("getTodos", () => {
    it("should return empty array for bad local storage data", () => {

      var actualTodos = TodoApi.getTodos();

      expect(actualTodos).toEqual([]);

    })

    it("should return valid data", () => {
      var todos = [
        { id: 11, text: "test", completed: false }
      ];

      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoApi.getTodos();

      expect(actualTodos).toEqual(todos);
    })
  })

});