import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDhx9RTM_8Nrm6uAPUvvxhqP3SmMF7c9qU",
    authDomain: "clone-4b31a.firebaseapp.com",
    projectId: "clone-4b31a",
    storageBucket: "clone-4b31a.appspot.com",
    messagingSenderId: "773051492126",
    appId: "1:773051492126:web:e479d21584478974d88b0f",
    measurementId: "G-Y1X2PRWLSD"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db,auth}