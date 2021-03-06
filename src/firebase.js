import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6QZsZrqe5F683vhYN_U_Pp4zR3wwwMTo",
  authDomain: "brogey-7fb3a.firebaseapp.com",
  projectId: "brogey-7fb3a",
  storageBucket: "brogey-7fb3a.appspot.com",
  messagingSenderId: "399353807646",
  appId: "1:399353807646:web:cc92cb7bd1ed159f2ebf0f",
  measurementId: "G-GG0ENYJVBD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };