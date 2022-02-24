import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "@firebase/auth"
import { auth } from '../firebase'

const AuthContext = createContext({})

// const config = {
//   scope: ["profile", "email"],
//   permissions: ["public_profile", "email", "gender", "location"],
// };

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  // if user is logged in or not
  useEffect(() => onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    } setLoadingInitial(false)
    }), []);

  const logout = () => {
    setLoading(true)
    signOut(auth)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  const signInWithGoogle = async () => {
    setLoading(true)
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider).then(res => console.log(res))
      // .then(async (res) => {
      // const name = res.user.displayName
      // const email = res.user.email
      // const profilePic = res.user.photoURL
      // const { idToken, accessToken } = res
      // const credential = GoogleAuthProvider.credential(idToken, accessToken)
      // await signInWithCredential(auth, credential)
    // })
    .catch(err => {
      setError(err)
    }).finally(() => setLoading(false))
  };

  const memoedValue = useMemo(() => ({
    user,
    loading,
    error,
    signInWithGoogle,
    logout,
  }), [user, loading, error])

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}