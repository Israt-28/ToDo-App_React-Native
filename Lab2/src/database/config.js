import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfvuP6ojwFisN-xoayhUV0WK4A_38BCvg",
    authDomain: "todo-apprn.firebaseapp.com",
    projectId: "todo-apprn",
    storageBucket: "todo-apprn.appspot.com",
    messagingSenderId: "712139447849",
    appId: "1:712139447849:web:c237a6314530f87027c638"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


