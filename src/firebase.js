import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseAPIKey = process.env.REACT_APP_FIRE_API_KEY
const mId = process.env.REACT_APP_MESSAGING_ID
const appId = process.env.REACT_APP_APP_ID
const measId = process.env.REACT_APP_MEASUREMENT_ID

const firebaseConfig = {
  apiKey: `${firebaseAPIKey}`,
  authDomain: "brogey-7fb3a.firebaseapp.com",
  projectId: "brogey-7fb3a",
  storageBucket: "brogey-7fb3a.appspot.com",
  messagingSenderId: `${mId}`,
  appId: `${appId}`,
  measurementId: `${measId}`
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };