import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import getMatchedUserInfo from '../lib/getMatchedUserInfo';

export default function ChatRow({ matchDetails, selectedFriend, setSelectedFriend }) {
  const { user } = useAuth();
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);
  const [lastMessage, setLastMessage] = useState("click to send message");

  useEffect(() => {
    setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid));
  }, [matchDetails, user]);

  return (
    <div 
      className={selectedFriend && selectedFriend.id == matchedUserInfo.id ? 
        "chat--selected" : "chat--row--wrapper"}
      onClick={() => setSelectedFriend(matchedUserInfo)}  
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
