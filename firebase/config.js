import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYtXjjoP9GH-j8KFzes2T7UyUQ0_UjkP4",
  authDomain: "myreadinglist-57133.firebaseapp.com",
  projectId: "myreadinglist-57133",
  storageBucket: "myreadinglist-57133.appspot.com",
  messagingSenderId: "944098897060",
  appId: "1:944098897060:web:5414e083a8d0dcc2ca4a31",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
