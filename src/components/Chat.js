import { onSnapshot, query, where, collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { db } from '../firebase';
import ChatRow from './ChatRow';

export const Chat = () => {
  const [matches, setMatches] = useState([]);
  const { user } = useAuth();
  const [selectedFriend, setSelectedFriend] = useState("Matt Michelet");

  useEffect(() => {
    onSnapshot(query(collection(db, "matches"),
      where("usersMatched", "array-contains", user.uid)),
      (snapshot) => 
        setMatches(snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })))
    )
  }, [user])

  const matchesMapped = matches.map(match => {
    return(
      <ChatRow key={match.id} matchDetails={match} />
    )
  })

  return (
    <div className='chat--container'>
      <div className="chat--box">
        <div className='chat--names--wrap'>
          <h4>{user.displayName}</h4>
        </div>
        <div className='chat--names--wrap'>
          <h4>{selectedFriend}</h4>
        </div>
        <div className='chat--row--container'>
          {matchesMapped}
        </div>
        <div className='chat--conversation'>
          <p>text</p>
          <p>text</p>
          <p>text</p>
          <input></input>
        </div>
      </div>
    </div>
  )
}
