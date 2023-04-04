
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBGmnf4sL9kG402W9QORnc867ZxsSszHnQ",
  authDomain: "tiktok---jornada-ebac-eb0fd.firebaseapp.com",
  projectId: "tiktok---jornada-ebac-eb0fd",
  storageBucket: "tiktok---jornada-ebac-eb0fd.appspot.com",
  messagingSenderId: "528773962211",
  appId: "1:528773962211:web:bff1d750bd3e7c1939e8d6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;