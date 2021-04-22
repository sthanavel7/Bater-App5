import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC5fPWJdwebOV6wVYgsp5lUtHYUh-JPzJo",
  authDomain: "barter-app-c96be.firebaseapp.com",
  databaseURL: "https://barter-app-c96be.firebaseio.com",
  projectId: "barter-app-c96be",
  storageBucket: "barter-app-c96be.appspot.com",
  messagingSenderId: "529132195228",
  appId: "1:529132195228:web:bd94690c553b5336770c59"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()