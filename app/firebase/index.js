import firebase from 'firebase';
try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDX1mwas6cb7a0h2omihYIZw99rK0vzxO0",
    authDomain: "sjames-todo-app.firebaseapp.com",
    databaseURL: "https://sjames-todo-app.firebaseio.com",
    storageBucket: "sjames-todo-app.appspot.com",
    messagingSenderId: "446537071503"
  };
  
  firebase.initializeApp(config); 
}
catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;