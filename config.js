import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCs8t5T6wo_jDvW5wAXYjzxE9ctdZ2M74k",
  authDomain: "newsletter-e3154.firebaseapp.com",
  databaseURL: "https://newsletter-e3154.firebaseio.com",
  projectId: "newsletter-e3154",
  storageBucket: "newsletter-e3154.appspot.com",
  messagingSenderId: "536960880182",
  appId: "1:536960880182:web:e226c71becf075305a5297"
};
 
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
