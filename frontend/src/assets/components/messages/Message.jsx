import React from 'react'
import donald_avatar from './donald.png';
import './Message.css';
import {useAuthContext} from '../../../context/AuthContext';
import { useSelector } from "react-redux";
import { extractTime } from '../../../components/utils/extractTime';

function Message({message}) {
  const {authUser} = useAuthContext(),
  {selectedConversation} = useSelector((state) => state.conversationAndMessageReducer.value.selectedConversation),
  fromMe = message.senderId === authUser._id;
  let chatClassName = fromMe ? 'chat-end' : 'chat-start',
  bubbleBgColor = fromMe ? "sentMsg" : "receivedMsg",
  footerText = fromMe ? "sent" : "received",
  formattedTime = extractTime(message.createdAt);
  return (
    <div className={ `chat ${chatClassName}`}>
        {/* <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt='Tailwind CSS chat bubble comonent'
                src={donald_avatar} />
            </div>
        </div> */}
      <div className={`${bubbleBgColor}`}>{message.message}</div>
      <div className={`${footerText}`}>{formattedTime}</div>
    </div>
  )
}

export default Message
