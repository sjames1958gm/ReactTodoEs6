var expect = require("expect");
var reducers = require("reducers");
var df = require('deep-freeze-strict');
var moment = require('moment');

describe("Reducers", () => {
  describe("searchTextReducer", () => {
    it('it should return same state', () => {
      var state = {};
      var action = { 
        type: "SOME_ACTION"
      };

      var res = reducers.searchTextReducer(df(state), df(action));

      expect(res).toEqual(state);
    });

    it('it should return input string', () => {
      var action = {
        type: "SET_SEARCH_TEXT",
        searchText: "search this"
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });

  });

  describe("showCompletedReducer", () => {
    it('it should return same state', () => {
      var state = {};
      var action = { 
        type: "SOME_ACTION"
      };

      var res = reducers.searchTextReducer(df(state), df(action));

      expect(res).toEqual(state);
    });

    it('it should return toggled state', () => {
      var action = {
        type: "TOGGLE_SHOW_COMPLETED"
      };

      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
      res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toEqual(false);
    });

  });

  describe("todosReducer", () => {
    it('it should return same state', () => {
      var state = {};
      var action = { 
        type: "SOME_ACTION"
      };

      var res = reducers.todosReducer(df(state), df(action));

      expect(res).toEqual(state);
    });

    it('it should return an added todo', () => {
      var state = [];
      var action = {
        type: "ADD_TODO",
        text: "new todo"
      };

      var res = reducers.todosReducer(df(state), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it("should toggle the todo completed", () => {
      var state = [{
        id: 234,
        text: "another todo",
        completed: false,
        completedAt: undefined,
        createdAt: moment().unix()
      },
      {
        id: 123,
        text: "this todo",
        completed: false,
        completedAt: undefined,
        createdAt: moment().unix()
      }];
      var action = {
        type: "TOGGLE_TODO",
        id: 123
      };

      var res = reducers.todosReducer(df(state), df(action));

      expect(res[1].completed).toEqual(true);
      expect(res[1].completedAt).toNotEqual(undefined);

      res = reducers.todosReducer(df(res), df(action));

      expect(res[1].completed).toEqual(false);
      expect(res[1].completedAt).toEqual(undefined);

    })

  it("should add existing todos", () => {
      var todos = [{
        id: 234,
        text: "another todo",
        completed: false,
        completedAt: undefined,
        createdAt: moment().unix()
      },
      {
        id: 123,
        text: "this todo",
        completed: false,
        completedAt: undefined,
        createdAt: moment().unix()
      }];
      var action = {
        type: "ADD_TODOS",
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(todos.length);
      expect(res).toEqual(todos);
    })
  });
});