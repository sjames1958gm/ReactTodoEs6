var expect = require("expect");

var TodoApi = require("TodoApi");

describe("TodoApi", () => {
  it('should exist', () => {
    expect(TodoApi).toExist();
  });

  describe("filterTodos", () => {
    var todos = [
      { id: 11, text: "Some text", completed: true },
      { id: 22, text: "this one", completed: false },
      { id: 33, text: "some more text", completed: true }
    ];

    it("should return all todos when showCompleted", () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, '');
        expect(filteredTodos.length).toBe(3);
    });

    it("should return only not completed todos when not showCompleted", () => {
      var filteredTodos = TodoApi.filterTodos(todos, false, '');
        expect(filteredTodos.length).toBe(1);

    });

    it('should return a todo with search text (todo text uppercase)', () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, 'some');
        expect(filteredTodos.length).toBe(2);
    });

    it('should return a todo with search text (search text Uppercase)', () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, 'This');
        expect(filteredTodos.length).toBe(1);
    });

    it("should sort todos with not completed first", () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, '');
        expect(filteredTodos[0].id).toBe(22);
    });
  })
});