// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM1tMt_y5lpckj4DHTd3Jm8DEOxGr5NFI",
  authDomain: "proyectoreact-8bd73.firebaseapp.com",
  projectId: "proyectoreact-8bd73",
  storageBucket: "proyectoreact-8bd73.firebasestorage.app",
  messagingSenderId: "173861708147",
  appId: "1:173861708147:web:d6eb555b7d5152d659e506",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
