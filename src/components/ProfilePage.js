import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const ProfilePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className='profile--container'>
      <div className="another--wrapper">
        <button 
          className="close--profile"
          onClick={() => navigate(-1)}
        >X</button>
        <div className="profile--wrapper">
          <img src={state.data.photoURL} alt='profile pic'/>
          <div className='card--name--container'>
            <div className='card--name'>
              <h3 className='card--person--name'>{state.data.displayName}</h3>
              <p>{state.data.job}</p>
              <ul>
                <li>Handicap: +{state.data.handicap}</li>
                <li>{state.data.drink}</li>
                <li>{state.data.cart}</li>
              </ul>
            </div>
            <div className='card--age--wrapper'>
              <h2>{state.data.age}</h2>
              <h3>{state.data.city}</h3>
            </div>
          </div>
          <div className='bio'>
            <h2>Bio</h2>
            <p>{state.data.bio}</p>
          </div>
          <button className="add-friend">Add Friend</button>
        </div>
      </div>
    </div>
  )
}
