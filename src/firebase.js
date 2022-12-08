// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjL1M4UyO-yiDf_AOo8yCFgSY4S56F3r0",
  authDomain: "taller-2-a340f.firebaseapp.com",
  projectId: "taller-2-a340f",
  storageBucket: "taller-2-a340f.appspot.com",
  messagingSenderId: "434213369825",
  appId: "1:434213369825:web:7329ceecc1b31b018f04a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const firestore = getFirestore(app);
 
 export {
    firestore
 }