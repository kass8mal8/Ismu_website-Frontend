import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC6_-tg9fy54FiMqAKEgAHHoQ_HiULa_iI",
  authDomain: "ismu-web.firebaseapp.com",
  projectId: "ismu-web",
  storageBucket: "ismu-web.appspot.com",
  messagingSenderId: "926711825686",
  appId: "1:926711825686:web:fb1f9bf0ab5ca2cd7ffc37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
