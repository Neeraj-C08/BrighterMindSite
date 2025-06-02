// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNROnDv4N_tVn8B4zUDt_ASFrAfZ1A024",
  authDomain: "bmwebsite-82a5b.firebaseapp.com",
  projectId: "bmwebsite-82a5b",
  storageBucket: "bmwebsite-82a5b.firebasestorage.app",
  messagingSenderId: "1031200483156",
  appId: "1:1031200483156:web:ee43213fefdea0a01ecac1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
