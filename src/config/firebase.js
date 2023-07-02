// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5FHd0kURS7APVGry4BOCRq2-WvilLwtU",
  authDomain: "chat-app-4dc3e.firebaseapp.com",
  projectId: "chat-app-4dc3e",
  storageBucket: "chat-app-4dc3e.appspot.com",
  messagingSenderId: "29789540743",
  appId: "1:29789540743:web:308eceecb7aea74de70322",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
