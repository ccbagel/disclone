import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGziTT36F8jLzWAqp7nFZLOjQageij6z8",
  authDomain: "ds-project-62a5d.firebaseapp.com",
  projectId: "ds-project-62a5d",
  storageBucket: "ds-project-62a5d.appspot.com",
  messagingSenderId: "67681428455",
  appId: "1:67681428455:web:cd48435423b4e918045342",
  measurementId: "G-G4S7M4CHT5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
