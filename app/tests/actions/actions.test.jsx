import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var expect = require("expect");
import firebase, {firebaseRef} from 'app/firebase';

import * as actions from "actions";

var createMockStore = configureMockStore([thunk]);

describe("actions", () => {
  it('should generate searchText action', () => {
    var action = { 
      type: "SET_SEARCH_TEXT",
      searchText: "some search text"
    };

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
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

    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO action', (done) => {
    const store = createMockStore({})
    const todoText = "my todo item";

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO',
      })
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate add todos action', () => {
    var todos = [
      { id: 1,
        text: 'anything', 
        completed: false,
        completedAt: undefined,
        createdAt: 500
        }
      ];

    var action = { 
      type: "ADD_TODOS",
      todos
    };

    var res = actions.addTodos(action.todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = { 
      type: "TOGGLE_SHOW_COMPLETED"
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    var action = { 
      type: "UPDATE_TODO",
      id: 2,
      updates: {
        completed: true,
        completedAt: 12345
      }
    };

    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });
   
  describe('Test with firebase todos', () => {
    var testTodoRef;
    var testTodo = {
          text: 'anything', 
          completed: false,
          createdAt: 500
        };

    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');
      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();
        return testTodoRef.set(testTodo);
      })
      .then(() => done())
      .catch(done); 
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        });
        expect(actions[0].updates).toInclude({
          completed: true,
        });
        expect(actions[0].updates.completedAt).toExist();

        done();
      }).catch(done);

    });

    it('should load todos and dispatch ADD_TODOS action', (done) => {
      const store = createMockStore({});
      const action = actions.startAddTodos();
      console.log(action);

      store.dispatch(action).then(() => {
        const actions = store.getActions();
      console.log(actions);

        expect(actions[0].type).toInclude('ADD_TODOS');
        expect(actions[0].todos.length).toEqual(1);
        expect(actions[0].todos[0].text).toEqual(testTodo.text);

        done();
      }).catch(done);

    });
  });

    it('should generate login action', () => {
    var action = { 
      type: "LOGIN",
      uid: "123443211234"
    };

    var res = actions.login(action.uid);

    expect(res).toEqual(action);
  });

   it('should generate logout action', () => {
    var action = { 
      type: "LOGOUT"
    };

    var res = actions.logout();

    expect(res).toEqual(action);
  });
});