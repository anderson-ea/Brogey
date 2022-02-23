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
          <h3 className='card--person--name'>{props.data.fullName}</h3>
          <p>{props.data.job}</p>
          <ul>
            <li>Handicap +{props.data.handicap}</li>
            <li>{props.data.drinking ? "Drinker" : "Doesn't Drink"}</li>
            <li>{props.data.walking ? "Cart" : "Walk"}</li>
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
