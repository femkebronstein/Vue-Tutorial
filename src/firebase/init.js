import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDXXq8l0JwZWxAR0IZNPQ9Pm2VwgcBBIag",
    authDomain: "udemy-ninja-smoothies-49159.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-49159.firebaseio.com",
    projectId: "udemy-ninja-smoothies-49159",
    storageBucket: "udemy-ninja-smoothies-49159.appspot.com",
    messagingSenderId: "47894526698",
    appId: "1:47894526698:web:88658df11e664fbb4af593",
    measurementId: "G-C99ZKHEBW2"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();