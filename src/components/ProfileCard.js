import React from 'react'

export const ProfileCard = (props) => {
  return (
    <div className='card'>
      <img 
        src={props.data.photoURL} 
        className='card--image' 
        alt='profile pic'
      />
      <div className='card--name--container'>
        <div className='card--name'>
          <h3>{props.data.fullName}</h3>
          <p>{props.data.job}</p>
        </div>
        <h2>{props.data.age}</h2>
      </div>
    </div>
  )
}
