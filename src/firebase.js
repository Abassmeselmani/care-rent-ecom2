// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBmVvA2fuVtLBGjtjQD2d0N7c0Q1WGer34",
  authDomain: "care-rent-ecom.firebaseapp.com",
  projectId: "care-rent-ecom",
  storageBucket: "care-rent-ecom.firebasestorage.app",
  messagingSenderId: "414171187398",
  appId: "1:414171187398:web:9b0a650f1fe2c0657bafc7",
  measurementId: "G-TM3NKR0JMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth, app };