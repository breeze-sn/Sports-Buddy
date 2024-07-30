// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNbnwwuLiT0VoEmr2aOnlFruegq8_0XrM",
  authDomain: "sports-buddy-breeze.firebaseapp.com",
  databaseURL: "https://sports-buddy-breeze-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sports-buddy-breeze",
  storageBucket: "sports-buddy-breeze.appspot.com",
  messagingSenderId: "886973377725",
  appId: "1:886973377725:web:6f4dce370e44bd2889dbd4",
  measurementId: "G-WS4GMME8R1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
