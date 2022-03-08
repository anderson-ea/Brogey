import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIRE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJ_ID}`,
  storageBucket: `${process.env.REACT_APP_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MSG_SEND}`,
  appId: `${process.env.REACT_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEAS_ID}`
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };