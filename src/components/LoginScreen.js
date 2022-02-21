import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

export const LoginScreen = () => {
  const { signInWithGoogle, logout } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className='signin--container'>
      <button 
        onClick={async () => {
          await signInWithGoogle();
          navigate('/');
        }}
        className='google--signin'
      >
        <img 
          className='google--img'
          src={require('../images/google.png')} 
          alt='google'
        />
        Sign In With Google
      </button>
    </div>
  )
}