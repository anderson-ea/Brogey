import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';

export default function ChatConversation({ matchDetails }) {
  const [lastMessage, setLastMessage] = useState("");
  const { user } = useAuth();
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);

  // useEffect(() => {
  //   setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid));
  // }, [matchDetails, user]);

  // const messageInput = (
  //   <div className='chat--input--wrapper'>
  //     <></>
  //     <input
  //       className='chat--input'
  //       placeholder="Send a Message..."
  //     >
  //     </input>
  //   </div>
  // )

  // return (
  //   <div>{messageInput}</div>
  // )
}
