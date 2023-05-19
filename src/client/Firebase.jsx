// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDONxATRjPIhhyPA2TKUPMVf_kYqlEMpQw",
  authDomain: "personalblog-84ca5.firebaseapp.com",
  projectId: "personalblog-84ca5",
  storageBucket: "personalblog-84ca5.appspot.com",
  messagingSenderId: "487119189354",
  appId: "1:487119189354:web:58cd04ee498cf6019d6113",
  measurementId: "G-7S1VWJMRKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const storage = firebase.storage();
export const db = getFirestore(app);

export default firebase;