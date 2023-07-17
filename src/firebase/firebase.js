// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

    
  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBroptR2PiWKqij_R7jCef8965XmMg4_RA",
  authDomain: "masaref1.firebaseapp.com",
  projectId: "masaref1",
  storageBucket: "masaref1.appspot.com",
  messagingSenderId: "78805101081",
  appId: "1:78805101081:web:01ec0371e7c9d28ce2d888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = firebase.firestore();