import React from 'react'
import { useLocation } from 'react-router-dom'

export const ProfilePage = () => {
  const { state } = useLocation();

  return (
    <div className='body--container'>
      <img src={state.data.photoURL} alt='profile pic'/>
    </div>
  )
}
