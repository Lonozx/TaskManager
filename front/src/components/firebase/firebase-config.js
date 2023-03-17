import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {

  apiKey: "AIzaSyDN-mKwa9VMdXldE_bdtp70nHGbm2rkWZM",

  authDomain: "taskmanager-24423.firebaseapp.com",

  projectId: "taskmanager-24423",

  storageBucket: "taskmanager-24423.appspot.com",

  messagingSenderId: "840295307910",

  appId: "1:840295307910:web:330d7267a721eee26fcf07",

  measurementId: "G-7CFHPGN24X"

};


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const googleProvider = new GoogleAuthProvider();
  