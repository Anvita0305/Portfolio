import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsz1KMwrNa8fpsDaF0_4ZOeyqC4hzmKlk",
  authDomain: "portfoliowebsite-5f105.firebaseapp.com",
  databaseURL: "https://portfoliowebsite-5f105-default-rtdb.firebaseio.com",
  projectId: "portfoliowebsite-5f105",
  storageBucket: "portfoliowebsite-5f105.appspot.com",
  messagingSenderId: "742199404148",
  appId: "1:742199404148:web:21d5dba0babdd667451321"
});

var db=firebaseApp.firestore();
export default db;