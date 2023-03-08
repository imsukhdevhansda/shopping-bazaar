import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxELtcY05Jv8Z4Cvgf1YbjTQqRN6c6m1k",
  authDomain: "myntra-clone-e2ba0.firebaseapp.com",
  projectId: "myntra-clone-e2ba0",
  storageBucket: "myntra-clone-e2ba0.appspot.com",
  messagingSenderId: "524359140548",
  appId: "1:524359140548:web:1dff2d9fbe5716c92c3591",
  measurementId: "G-JEG4Z208WX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db =getFirestore(app)

