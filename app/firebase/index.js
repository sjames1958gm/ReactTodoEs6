import firebase from 'firebase';
try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCda8-lYIwslJzBFIh1uEGMQN1pn1YspTE",
    authDomain: "mytodoapp-3d23d.firebaseapp.com",
    databaseURL: "https://mytodoapp-3d23d.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "401649224881"
  };
  
  firebase.initializeApp(config); 
}
catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
