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
        todo: {
          id: 'ididid',
          text: "test todo",
          completed: false,
          createdAt: 500,
          completedAt: undefined
        }
      };

      var res = reducers.todosReducer(df(state), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it("should update the todo completed", () => {
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

      var updates = {
        completed: true,
        completedAt: 12345,
      }

      var action = {
        type: "UPDATE_TODO",
        id: state[1].id,
        updates
      };

      var res = reducers.todosReducer(df(state), df(action));

      expect(res[1].completed).toEqual(updates.completed);
      expect(res[1].completedAt).toEqual(updates.completedAt);
      expect(res[1].text).toEqual(state[1].text);
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

  describe("authReducer", () => {
    it('it should have uid in state', () => {
      var state = {uid: "1234432112434"};
      var action = { 
        type: "LOGIN",
        uid: "1234432112434"
      };

      var res = reducers.authReducer(df({}), df(action));

      expect(res).toEqual(state);
    });

    it('it should have empty state', () => {
      var state = {};
      var action = { 
        type: "LOGOUT"
      };

      var res = reducers.authReducer(df({uid: "1234432112434"}), df(action));

      expect(res).toEqual(state);
    });
  });
});