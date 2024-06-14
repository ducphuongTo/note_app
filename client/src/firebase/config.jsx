// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyhWGcnhCHgBc-U4_jBDHii7QI7QmkU2s",
  authDomain: "note-app-b447b.firebaseapp.com",
  projectId: "note-app-b447b",
  storageBucket: "note-app-b447b.appspot.com",
  messagingSenderId: "1009184510181",
  appId: "1:1009184510181:web:c2245663fd9f0380bb040c",
  measurementId: "G-6G5BWYYT96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);