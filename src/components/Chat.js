import { onSnapshot, query, where, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { db } from '../firebase';
import ChatRow from './ChatRow';
import ChatConversation from './ChatConversation';

export const Chat = () => {
  const [matches, setMatches] = useState([]);
  const { user } = useAuth();
  const [matchDetails, setMatchDetails] = useState({
    selectedFriend: null,
    selectedMatch: null
  })

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
    return (
      <ChatRow 
        key={match.id} 
        matchData={match}
        matchDetails={matchDetails} 
        setMatchDetails={setMatchDetails}
      />
    )
  })

  const matchesConversation = matchDetails.selectedMatch ? 
    <ChatConversation 
      key={matchDetails.selectedMatch.id} 
      matchDetails={matchDetails.selectedMatch}
    /> :
    null

  return (
    <div className='chat--container'>
      <div className="chat--box">
        <div className='chat--names--wrap'>
          <h4>{user.displayName}</h4>
        </div>
        <div className='chat--names--wrap'>
          <h4>{matchDetails.selectedFriend ? 
            matchDetails.selectedFriend?.displayName : "Chat"}</h4>
        </div>
        <div className='chat--row--container'>
          {matchesMapped.length > 0 ? matchesMapped : "No matches yet"}
        </div>
        <div className='chat--conversation'>
          {matchesConversation}
        </div>
      </div>
    </div>
  )
}
