import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

export const LoginScreen = () => {
  const { signInWithGoogle, logout, user } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className='signin--container'>
      <button 
        onClick={async () => {
          await signInWithGoogle();
          console.log(user.uid);
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
