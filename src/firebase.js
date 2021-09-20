import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
    
    /*
      apiKey: "AIzaSyCGziTT36F8jLzWAqp7nFZLOjQageij6z8",
  authDomain: "ds-project-62a5d.firebaseapp.com",
  projectId: "ds-project-62a5d",
  storageBucket: "ds-project-62a5d.appspot.com",
  messagingSenderId: "67681428455",
  appId: "1:67681428455:web:cd48435423b4e918045342",
  measurementId: "G-G4S7M4CHT5"
    */
