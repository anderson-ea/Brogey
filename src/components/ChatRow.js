import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import getMatchedUserInfo from '../lib/getMatchedUserInfo';

export default function ChatRow({ matchDetails }) {
  // const navigation = useNavigate();
  const { user } = useAuth();
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid));
  }, [matchDetails, user]);

  return (
    <div className='chat--row--container'>
      <div className="chat--row--wrapper">
        <img className='thumbnail'
          src={matchedUserInfo?.photoURL} 
          alt="profile thumbnail" 
        />
        <div className="chat--row--info">
          <p className='chat--row--name'>{matchedUserInfo?.displayName}</p>
          <p className='last-text'>Last text sent • 14h</p>
        </div>
      </div>
    </div>
  )
}
