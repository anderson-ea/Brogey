import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { db } from '../firebase';
import useAuth from '../hooks/useAuth';

export const ProfilePage = () => {
  const { state } = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();

  const generateId = (id1, id2) => (id1 > id2 ? id1 + id2 : id2 + id1);

  const addFriend = async () => {
    const friendAdded = state.data
    const loggedInUser = (
      await getDoc(doc(db, "users", user.uid))
    ).data();
    // Check if user already added you...
    getDoc(doc(db, "users", friendAdded.id, "added", user.uid)).then(
      (documentSnapshot) => {
        if (documentSnapshot.exists()) {
          // User was second to add, so create friends
          alert(`You matched with ${friendAdded.displayName}`)
          setDoc(doc(db, "matches", generateId(user.uid, friendAdded.id)), {
            users: {
              [user.uid] : loggedInUser,
              [friendAdded.id]: friendAdded
            },
            usersMatched: [user.uid, friendAdded.id],
            timestamp: serverTimestamp()
          })
          navigate("/") 
        } else {
          // user was first to add friend...
          alert(`Friend request sent to ${friendAdded.displayName}`)
        }
        setDoc(doc(db, "users", user.uid, "added", friendAdded.id),
          friendAdded
        )
        navigate("/")
      }
    )
  }

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
                <li><span role="img" aria-label="handicap">???</span>Handicap: +{state.data.handicap}</li>
                <li><span role="img" aria-label="beer">????</span>{state.data.drink}</li>
                <li><span role="img" aria-label="cart">????</span>{state.data.cart}</li>
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
        </div>
        <button
          className="add-friend"
          onClick={addFriend}
        >Add Friend</button>
      </div>
    </div>
  )
}
