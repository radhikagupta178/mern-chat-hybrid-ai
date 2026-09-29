import React from 'react'
import { RxAvatar } from "react-icons/rx";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { useSocketContext } from '../../../context/SocketContext';
import {setSelectedConversation} from '../../../store/conversationAndMessages';
import './Conversation.css'
// import donald_avatar from '../messages/donald.png';

const Conversation = ({conversation, lastIdx}) => {
    const selectedConversation = useSelector((state) => state.conversationAndMessageReducer.value.selectedConversation);
    const dispatch = useDispatch(setSelectedConversation);

    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded py-2 py-1 cursor-pointer text-gray-300`}
            style={{paddingTop: "inherit"}}
            onClick={() => dispatch(setSelectedConversation(conversation))}>
                <div className='avatar online'>
                    <div className={`${isSelected ? "isSelected" : ""}`} id={conversation.fullName}>
                        {/* <img src={conversation.profilePic ? conversation.profilePic : <RxAvatar />} /> */}
                        <RxAvatar />
                    </div>
                </div>

            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-300'>
                        {conversation.fullName}
                    </p>
                    <span className='text-l'>{isOnline ? <div className="circle" /> : ""}</span>
                </div>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 h01'></div>}
        </>
    )
}

export default Conversation
