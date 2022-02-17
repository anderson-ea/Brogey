import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseAPIKey = process.env.REACT_APP_FIRE_API_KEY

const firebaseConfig = {
  apiKey: "firebaseAPIKey",
  authDomain: "secret",
  projectId: "secret",
  storageBucket: "secret",
  messagingSenderId: "secret",
  appId: "secret",
  measurementId: "secret"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// export const signInWithGoogle = () => {
//   const provider = new GoogleAuthProvider();
//   signInWithPopup(auth, provider)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     alert(err)
//   })
// };

export { auth, db };
