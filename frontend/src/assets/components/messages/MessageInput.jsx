import React from 'react'
import { useState, useRef, useLayoutEffect } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../../hooks/useSendMessage';
import './MessageInput.css';
import Messages from './Messages';

const MessageInput=() => {
  useLayoutEffect(()=>{
    inputRef.current.focus();
  },)
  const {loading, sendMessage} = useSendMessage(),
   [message, setMessage] = useState("");
  const inputRef = useRef(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
    <Messages />
  }
  const myStyle = {
    position: "fixed",
    bottom: "0"
}
  return (
    <form onSubmit={handleSubmit} style={{position: "fixed", bottom: "0"}}>
      <div>
        <input type="text"
          placeholder='Send a message'
          value={message} 
          ref={inputRef}
          onChange={(e)=>setMessage(e.target.value)} 
          style={{color: "black", width: "266px"}}
          />
        <button type="submit" id="sendButton">
          {loading ? <div className='loading loading-spinner'/> : <BsSend />}
        </button>
      </div>
    </form>
  )
}

export default MessageInput
