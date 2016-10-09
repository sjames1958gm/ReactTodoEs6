var uuid = require("node-uuid");
var moment = require('moment');

export var searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return action.searchText;
    default:
      return state;
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_COMPLETED":
      return !state;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, 
        {
          text: action.text, 
          id: uuid(),
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }];
    case 'TOGGLE_TODO':
      return state.map((t) => {
        if (t.id != action.id) {
          return t;
        }
        else {
          var completed = !t.completed;
          return {...t, 
            completed: completed,
            completedAt: completed ? moment().unix() : undefined
          };
        }
      });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
}


