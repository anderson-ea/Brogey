import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

export const LoginScreen = () => {
  const { signInWithGoogle} = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className='signin--container'>
      <p>Here at Brogey, we use Google Accounts as our sole login. 
        We do not want to spend a lot of time verifying identity, 
        resetting passwords, detecting robot-login storms, 
        and other issues. So, we let Google do that hard work.</p>
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
