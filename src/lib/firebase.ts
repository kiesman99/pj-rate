// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from '@firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBguEMVVNiS-Neh3g_juIXxbtADmnYuK_w",
  authDomain: "rateit-34431.firebaseapp.com",
  projectId: "rateit-34431",
  storageBucket: "rateit-34431.appspot.com",
  messagingSenderId: "830927434955",
  appId: "1:830927434955:web:1cbd16a0bba2d5ae6a174e",
  measurementId: "G-J40DZPMQGZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);