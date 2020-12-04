import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBfkos6exWOTTQGa1mE-BPW9GSHRZ61V6M",
  authDomain: "firestore-test-8e2fb.firebaseapp.com",
  databaseURL: "https://firestore-test-8e2fb.firebaseio.com",
  projectId: "firestore-test-8e2fb",
  storageBucket: "firestore-test-8e2fb.appspot.com",
  messagingSenderId: "284814230159",
  appId: "1:284814230159:web:dc1b532f7b02559639a6fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();