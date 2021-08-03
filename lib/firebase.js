import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqWzsN2yPEo3UQ214JUq_zrcl_oFOEGuM",
    authDomain: "docs-e04f3.firebaseapp.com",
    projectId: "docs-e04f3",
    storageBucket: "docs-e04f3.appspot.com",
    messagingSenderId: "774208238764",
    appId: "1:774208238764:web:17bbb35d1ca23bd5cd1b09",
  };



  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();



  const db = app.firestore();



  export { db };

