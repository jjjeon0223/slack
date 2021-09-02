import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBg3frSF7CmyR-3bpgcUoHaIJhwe_s5Nkc",
  authDomain: "slack-65cf6.firebaseapp.com",
  projectId: "slack-65cf6",
  storageBucket: "slack-65cf6.appspot.com",
  messagingSenderId: "807635418590",
  appId: "1:807635418590:web:a6386439f76db56b3a714f",
  measurementId: "G-GF48JKB43H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const firebaseExports = { db, auth, provider };

export default firebaseExports;
