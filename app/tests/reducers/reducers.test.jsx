var expect = require("expect");
var reducers = require("reducers");
var df = require('deep-freeze-strict');

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
});