import firebase from 'firebase'
import 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCCOHGFfvaTAuFECClcgkHXprAd3nKv2Rs",
    authDomain: "langara-chat.firebaseapp.com",
    databaseURL: "https://langara-chat.firebaseio.com",
    projectId: "langara-chat",
    storageBucket: "langara-chat.appspot.com",
    messagingSenderId: "41735177193"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots:true})

  export default firebaseApp.firestore()