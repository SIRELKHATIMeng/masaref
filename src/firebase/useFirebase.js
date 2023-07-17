import firebase from 'firebase/compat/app'
import 'firebase/firestore'
// import 'firebase/[SERVICE_NAME]'
//export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// compat packages are API compatible with namespaced code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEpyZIBb3pV7oV4AjBPXao9fvggmeGb2A",
  authDomain: "masaref-f2a9b.firebaseapp.com",
  projectId: "masaref-f2a9b",
  storageBucket: "masaref-f2a9b.appspot.com",
  messagingSenderId: "1033582346596",
  appId: "1:1033582346596:web:07e0baf2f2faecd4d0ba71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';

export const useFirestore = () => {
  const [items, setItems] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    const unsubscribe = db
      .collection('items')
      .orderBy('date')
      .onSnapshot((snap) => {
        let fetched = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        let budget = snap.docs.map((doc) => {
          return doc.data().amount;
        });

        setItems(fetched);
        setBudget(
          budget.length > 0 && budget.reduce((acc, curr) => acc + curr),
          0
        );
      });
    return unsubscribe;
  }, []);

  const addItem = async (item, amount) => {
    await db.collection('items').add({
      ...item,
      amount,
    });
  };

  const deleteItem = async (id) => {
    await db.collection('items').doc(id).delete();
  };

  return { items, addItem, budget, deleteItem };
};