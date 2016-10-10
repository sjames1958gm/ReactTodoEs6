import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDX1mwas6cb7a0h2omihYIZw99rK0vzxO0",
  authDomain: "sjames-todo-app.firebaseapp.com",
  databaseURL: "https://sjames-todo-app.firebaseio.com",
  storageBucket: "sjames-todo-app.appspot.com",
  messagingSenderId: "446537071503"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref(); 
firebaseRef.set({
  app: {
    name: "Todo App",
    version: "0.1.0"
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }  
});

var todoRef = firebaseRef.child('todos');
todoRef.on('child_added', (snapshot) =>{
  console.log("user object changed", snapshot.val());
});

todoRef.push({text: "Walk the dog", completed: false});
todoRef.push({text: "Feed the cat", completed: false});