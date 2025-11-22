import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYsoUzyh_0SUEPLJO5aNnQOKAzc4lWgGM",
  authDomain: "cartesyum-firebase.firebaseapp.com",
  projectId: "cartesyum-firebase",
  storageBucket: "cartesyum-firebase.firebasestorage.app",
  messagingSenderId: "501165415691",
  appId: "1:501165415691:web:b2a3bf24d121891006560e",
  measurementId: "G-JEQ06T6H5V",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
