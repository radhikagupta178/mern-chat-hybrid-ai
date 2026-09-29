import React from 'react'
import MessageInput from './MessageInput';
import Messages from './Messages';
import { useSelector } from "react-redux";
import { TiMessages } from 'react-icons/ti'
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useAuthContext } from '../../../context/AuthContext';
import './MessageContainer.css'
import { setSelectedConversation } from '../../../store/conversationAndMessages'
function MessageContainer() {
    const selectedConversation = useSelector((state) => state.conversationAndMessageReducer.value.selectedConversation);
    const dispatch = useDispatch(setSelectedConversation);
    useEffect(() => {
        return () => dispatch(setSelectedConversation({}));
    }, [dispatch])
    return (
        <div className='conversationStarter'>
            {!selectedConversation?._id ? <NoChatSelected /> :
                (
                    <div className='divClass'>
                        <>
                            <div className='userTitle'>
                                <span className='label-text text-l'>To: </span>
                                <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
                            </div>
                            <Messages />
                            <MessageInput />
                        </>

                    </div>
                )}</div>)
}

export default MessageContainer

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div>
            <div>
                <p className='authenticatedUser'>Hello {authUser.fullName.split(" ")[0]}</p>
                <p className="welcomeMessage">Select a chat to start socializing!</p>
                <TiMessages />
            </div>
        </div>


    )
}