import * as firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyC_KSwlioS-QIpUoNp-sLOwRgQ9UhhvDYY",
  authDomain: "true-recipes.firebaseapp.com",
  projectId: "true-recipes",
  storageBucket: "true-recipes.appspot.com",
  messagingSenderId: "744933536955",
  appId: "1:744933536955:web:d6cf958df7374c0335659e"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();




