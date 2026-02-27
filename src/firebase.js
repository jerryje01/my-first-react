// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo5xW2Munf1bbqYo_wwot9OBjuFTwaPZU",
  authDomain: "react-learn-1-579a2.firebaseapp.com",
  projectId: "react-learn-1-579a2",
  storageBucket: "react-learn-1-579a2.firebasestorage.app",
  messagingSenderId: "546777000102",
  appId: "1:546777000102:web:0e7548c3d39fb8df2e2c67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };