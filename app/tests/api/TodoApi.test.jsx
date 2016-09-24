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

  describe("filterTodos", () => {
    var todos = [
      { id: 11, text: "Some text", completed: true },
      { id: 22, text: "this one", completed: false },
      { id: 33, text: "Some more text", completed: true }
    ];

    it("should return all todos when showCompleted", () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, '');
        expect(filteredTodos.length).toBe(3);
    });

    it("should return only not completed todos when not showCompleted", () => {
      var filteredTodos = TodoApi.filterTodos(todos, false, '');
        expect(filteredTodos.length).toBe(1);

    });

    it('should return a todo with search text', () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, 'some');
        expect(filteredTodos.length).toBe(2);
    });

    it("should sort todos with not completed first", () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, '');
        expect(filteredTodos[0].id).toBe(22);
    });
  })
});