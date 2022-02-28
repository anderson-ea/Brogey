import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProfileCard = (props) => {
  const navigate = useNavigate();

  return (
    <div className='card'>
      <img
        src={props.data.photoURL} 
        className='card--image' 
        alt='profile pic'
        onClick={() => navigate(`/profile/${props.data.id}`, {
          state: { data: props.data }
        })}
      />
      <div className='card--name--container'>
        <div className='card--name'>
          <h3 className='card--person--name'>{props.data.displayName}</h3>
          <p>{props.data.job}</p>
          <ul>
            <li>Handicap: +{props.data.handicap}</li>
            <li>{props.data.drink}</li>
            <li>{props.data.cart}</li>
          </ul>
        </div>
        <div className='card--age--wrapper'>
          <h2>{props.data.age}</h2>
          <h3>{props.data.city}</h3>
        </div>
      </div>
    </div>
  )
}
