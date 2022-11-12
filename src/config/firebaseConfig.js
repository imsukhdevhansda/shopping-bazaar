import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDrrB51QUrFLhxpJ2_rCy62tDRxLfunEgA",
  authDomain: "fir-sandbox-1064e.firebaseapp.com",
  projectId: "fir-sandbox-1064e",
  storageBucket: "fir-sandbox-1064e.appspot.com",
  messagingSenderId: "61620976939",
  appId: "1:61620976939:web:db377d9da827d32f72996e",
  measurementId: "G-GB0VQ5PXTP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
