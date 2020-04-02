import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBYa8SMnCViCqloxT8djevqZbSWiCxFGHc",
  authDomain: "slack-466ec.firebaseapp.com",
  databaseURL: "https://slack-466ec.firebaseio.com",
  projectId: "slack-466ec",
  storageBucket: "slack-466ec.appspot.com",
  messagingSenderId: "648495451802",
  appId: "1:648495451802:web:16dc753100a3bf9e771923"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
