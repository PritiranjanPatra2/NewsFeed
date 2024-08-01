// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1ezDXBZkhsBUAExrWqYa2g2ltL7eL1ng",
  authDomain: "my-project-fbfeb.firebaseapp.com",
  projectId: "my-project-fbfeb",
  storageBucket: "my-project-fbfeb.appspot.com",
  messagingSenderId: "960472024691",
  appId: "1:960472024691:web:6a57e923b1e8fe56b50c06",
  measurementId: "G-EHBEGTT6FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
