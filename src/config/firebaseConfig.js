import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ88MHpNBJRRi1BtWaC5uPVinGzRfdOLM",
  authDomain: "shopping-bazaar-33b31.firebaseapp.com",
  projectId: "shopping-bazaar-33b31",
  storageBucket: "shopping-bazaar-33b31.appspot.com",
  messagingSenderId: "806650777212",
  appId: "1:806650777212:web:3aa4a5c527228d373dc3f9",
  measurementId: "G-WBN36NTHXR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
