// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIvLfrQkVosykV3ZzBvA9uyaE97CEaJfQ",
  authDomain: "revue-64b0e.firebaseapp.com",
  projectId: "revue-64b0e",
  storageBucket: "revue-64b0e.appspot.com",
  messagingSenderId: "1060986400724",
  appId: "1:1060986400724:web:2f58e5f16699048e663041",
  measurementId: "G-9JHZX45HP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
