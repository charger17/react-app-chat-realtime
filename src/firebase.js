// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGn0N-FPKsueD4r06z-2W2MpBKDIXIyCw",
  authDomain: "chat-3-feeb1.firebaseapp.com",
  projectId: "chat-3-feeb1",
  storageBucket: "chat-3-feeb1.appspot.com",
  messagingSenderId: "148096341177",
  appId: "1:148096341177:web:8cb792d749b20bfd187768"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}