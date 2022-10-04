import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHXgiq1E7hqzWkN6qd5n_uOkio8u79IMo",
  authDomain: "chatsaan.firebaseapp.com",
  projectId: "chatsaan",
  storageBucket: "chatsaan.appspot.com",
  messagingSenderId: "323806787928",
  appId: "1:323806787928:web:b727acb2db83c8eae98d2d",
  measurementId: "G-08Z6R75F3J"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);