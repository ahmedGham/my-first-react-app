import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwXXaJr2bQnFAHFwX9xcIAeJDDkq0I1g0",
  authDomain: "book-library-49cd9.firebaseapp.com",
  projectId: "book-library-49cd9",
  storageBucket: "book-library-49cd9.appspot.com",
  messagingSenderId: "233262243754",
  appId: "1:233262243754:web:7b3e4465589387787e55d3",
  measurementId: "G-0FRNE1DKH5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

