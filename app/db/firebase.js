// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEreEMxxUZV_msR1h7Q5DRRahd-zawALs",
  authDomain: "recipebox-3f495.firebaseapp.com",
  projectId: "recipebox-3f495",
  storageBucket: "recipebox-3f495.appspot.com",
  messagingSenderId: "821123907510",
  appId: "1:821123907510:web:f6e80c20d5607e7c6c8b17",
  measurementId: "G-KJYSV46SF4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
