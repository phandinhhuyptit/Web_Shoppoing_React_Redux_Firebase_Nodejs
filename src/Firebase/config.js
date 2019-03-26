import  firebase from 'firebase/app' 
import 'firebase/firestore'
import 'firebase/firebase-auth'  

const config = {
    apiKey: "AIzaSyAzT28-b3mPickRI2ibcVratJ-p1ouBoh4",
    authDomain: "web-shopping-1ee2a.firebaseapp.com",
    databaseURL: "https://web-shopping-1ee2a.firebaseio.com",
    projectId: "web-shopping-1ee2a",
    storageBucket: "web-shopping-1ee2a.appspot.com",
    messagingSenderId: "160820034148"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots : true})
  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const Firebase =firebase;
  