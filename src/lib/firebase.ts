// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbE9DWNxCQmbikWL_Tq2wpMgHtGOugqqg",
  authDomain: "ts-material-home.firebaseapp.com",
  projectId: "ts-material-home",
  storageBucket: "ts-material-home.firebasestorage.app",
  messagingSenderId: "882310536956",
  appId: "1:882310536956:web:735f520afdbf923c6dc179",
  measurementId: "G-HCNFKDRPHH",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
