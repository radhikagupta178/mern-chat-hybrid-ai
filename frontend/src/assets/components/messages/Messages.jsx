import { useRef } from 'react';
import { useEffect } from 'react';
import useGetMessages from '../../../hooks/useGetMessages';
import useListenMessages from '../../../hooks/useListenMessages';
import Message from './Message';
import './Messages.css'

function Messages() {
  const lastMessageRef = useRef();
  let messages = [],
    loading = false;
  messages = useGetMessages().messages;
  loading = useGetMessages().loading;
  useListenMessages();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="messageApp" >
      {!loading && messages !== undefined && messages[0] && messages[0].length > 0 && messages[0].map((message) => {
        return (<div key={message._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
        );
      })}
      {!loading && messages !== undefined && messages[0] && messages[0].length === 0 && <p className='text-center'>Send a message to start the conversation</p>}
    </div>
  )
}

export default Messages
