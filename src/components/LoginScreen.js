import React from 'react'
import useAuth from '../hooks/useAuth'

export const LoginScreen = () => {
  const { signInWithGoogle, loading } = useAuth();
  
  return (
    <button onClick={signInWithGoogle}>Sign In With Google</button>
  )
}
