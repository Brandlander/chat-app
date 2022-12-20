// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ8viJoWaHCLqq8_elgsCew25t1QDPq_s",
  authDomain: "shrimp-chat.firebaseapp.com",
  projectId: "shrimp-chat",
  storageBucket: "shrimp-chat.appspot.com",
  messagingSenderId: "358966523550",
  appId: "1:358966523550:web:550e4b2c973ac1a0beed8f",
  measurementId: "G-1M78P8KHYW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();