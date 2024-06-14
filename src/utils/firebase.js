// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2BT_st6DIKgG58r6EraCtHCGtvpRdDrs",
  authDomain: "netflixgpt-81c07.firebaseapp.com",
  projectId: "netflixgpt-81c07",
  storageBucket: "netflixgpt-81c07.appspot.com",
  messagingSenderId: "653509616002",
  appId: "1:653509616002:web:5fe6396140d41d1b986f9b",
  measurementId: "G-CE4KGWGW32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
