import firebase, {firebaseRef, githubProvider} from 'app/firebase';
import moment from 'moment';

export var setSearchText = (searchText) => ({
  type: "SET_SEARCH_TEXT", searchText
});

export var addTodo = (todo) => ({
  type: 'ADD_TODO', todo
});

export var startAddTodo = (text) => {
  return  (dispatch, getState) => {
    var todo = {
      text, 
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodos = (todos) => ({
  type: 'ADD_TODOS', todos
});

export var startAddTodos = () => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todosRef = firebaseRef.child(`users/${uid}/todos`);
    return todosRef.once('value').then((snapshot) => {
      var todosObj = snapshot.val() || {};
      var todos = [];
      for (var key in todosObj) {
        todos.push({id : key, ...todosObj[key]});
      }
      dispatch(addTodos(todos));
    });
  };
};

export var toggleShowCompleted = () => ({
  type: 'TOGGLE_SHOW_COMPLETED'
});


export var updateTodo = (id, updates) => ({
  type: 'UPDATE_TODO', 
  id,
  updates
});

export var startToggleTodo = (id, completed) => {

  return (dispatch, getState) => {
    var uid = getState.auth.uid;
    var todoRef = firebaseRef.child(`user/${uid}/todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null,
    }

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export var startLogin = () => {

  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider)
    .then((result) => {
      console.log('auth worked: ', result);
    }, (error) => {
      console.log('auth failed: ', error);
    })
  };
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut()
    .then(() => {
      console.log('Logout done');
    });
  };
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
}

export var logout = () => {
  return {
    type: 'LOGOUT'
  }
}
