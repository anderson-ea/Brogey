import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "@firebase/auth"
import { auth } from '../firebase'

const AuthContext = createContext({})

// context provider for user authentication
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

  // logs out user
  const logout = () => {
    setLoading(true)
    signOut(auth)
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  // sign in to google method
  const signInWithGoogle = async () => {
    setLoading(true)
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider).then(res => res)
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

// useAuth is hook to pull user data throughout almost every component
export default function useAuth() {
  return useContext(AuthContext)
}