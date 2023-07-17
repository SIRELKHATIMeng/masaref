// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjhyUsXcwP-P0Q6kOD3pVKTGCJ8SlXb9k",
    authDomain: "masaref1-55394.firebaseapp.com",
    projectId: "masaref1-55394",
    storageBucket: "masaref1-55394.appspot.com",
    messagingSenderId: "270236946476",
    appId: "1:270236946476:web:85c8a09c3b4e1c79af4189"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();