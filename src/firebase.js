import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-59790.firebaseapp.com",
  projectId: "chat-59790",
  storageBucket: "chat-59790.appspot.com",
  messagingSenderId: "156527240859",
  appId: "1:156527240859:web:6c8384f5aab33ddc4a883e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
