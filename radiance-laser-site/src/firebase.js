import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEzVZKOoqg1p6Mx1oNE8DZC0ZwnnnxsFg",
  authDomain: "radiancelaser-e769c.firebaseapp.com",
  projectId: "radiancelaser-e769c",
  storageBucket: "radiancelaser-e769c.firebasestorage.app",
  messagingSenderId: "422241169809",
  appId: "1:422241169809:web:2528bd754e1641b6466a30"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
