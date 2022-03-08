import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import getMatchedUserInfo from '../lib/getMatchedUserInfo';

export default function ChatRow({ matchData, matchDetails, setMatchDetails }) {
  const { user } = useAuth();
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);
  const [lastMessage, setLastMessage] = useState("click to send message");

  useEffect(() => {
    setMatchedUserInfo(getMatchedUserInfo(matchData.users, user.uid));
  }, [matchData, user]);

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
        <p className='last-text'>{lastMessage} • 14h</p>
      </div>
    </div>
  )
}
