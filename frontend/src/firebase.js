// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pfe-mern-estate.firebaseapp.com",
  projectId: "pfe-mern-estate",
  storageBucket: "pfe-mern-estate.appspot.com",
  messagingSenderId: "200198559213",
  appId: "1:200198559213:web:86697b83877152fdbdc3e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);