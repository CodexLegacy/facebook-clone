// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyByNyYxPLcnyL3Ap0pW5AlP3DZo7pRgs-4",
    authDomain: "facebook-clone-5ae91.firebaseapp.com",
    databaseURL: "https://facebook-clone-5ae91.firebaseio.com",
    projectId: "facebook-clone-5ae91",
    storageBucket: "facebook-clone-5ae91.appspot.com",
    messagingSenderId: "1071657382320",
    appId: "1:1071657382320:web:4e8ecedb216d9dea81a675",
    measurementId: "G-FELYSMT6Q9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;