import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import useAuth from '../hooks/useAuth';
import getMatchedUserInfo from '../lib/getMatchedUserInfo';

export default function ChatRow({ matchData, matchDetails, setMatchDetails }) {
  const { user } = useAuth();
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    setMatchedUserInfo(getMatchedUserInfo(matchData.users, user.uid));
  }, [matchData, user]);

  useEffect(() => 
    onSnapshot(
      query(
        collection(db, "matches", matchData?.id, "messages"),
        orderBy("timestamp", "desc")
      ), snapshot => setLastMessage(snapshot.docs[0]?.data()?.message)
    ), 
    [matchData, db]
  );

  return (
    <div 
      className={matchDetails.selectedFriend && matchDetails.selectedFriend.id == matchedUserInfo.id ? 
        "chat--selected" : "chat--row--wrapper"}
      onClick={() => setMatchDetails({
        selectedMatch: matchData,
        selectedFriend: matchedUserInfo
      })}  
    >
      <img className='thumbnail'
        src={matchedUserInfo?.photoURL} 
        alt="profile thumbnail" 
      />
      <div className="chat--row--info">
        <p className='chat--row--name'>{matchedUserInfo?.displayName}</p>
        <p className='last-text'>
          {lastMessage == null ? "click to say hi" : lastMessage}
        </p>
      </div>
    </div>
  )
}
