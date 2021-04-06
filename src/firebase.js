import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKShDyf-0gAbbEAlsv45Ap78dxrTC1Ezg",
  authDomain: "clone-52231.firebaseapp.com",
  projectId: "clone-52231",
  storageBucket: "clone-52231.appspot.com",
  messagingSenderId: "59439726497",
  appId: "1:59439726497:web:264cf4e5b44176065e15e0",
  measurementId: "G-H6RYV6ZEZ5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
