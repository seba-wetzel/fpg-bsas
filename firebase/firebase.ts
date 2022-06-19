// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOyZbvMoQ8zpmLfEEnz96MHQeNwXjvpyw",
  authDomain: "nuestramerica.firebaseapp.com",
  projectId: "nuestramerica",
  storageBucket: "nuestramerica.appspot.com",
  messagingSenderId: "660052534462",
  appId: "1:660052534462:web:88e7c401a2685769f3eaef",
  measurementId: "G-GT8BTZT3ZY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);

