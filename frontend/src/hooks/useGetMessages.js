// import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setMessage } from '../store/conversationAndMessages';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const selectedConversation = useSelector((state) => state.conversationAndMessageReducer.value.selectedConversation);
    const messages = useSelector((state) => state.conversationAndMessageReducer.value.messages);
    const dispatch = useDispatch(setMessage);
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/messages/${selectedConversation._id}`);
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                dispatch(setMessage(data));
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        if (selectedConversation._id) getMessages();
    }, [selectedConversation?._id, dispatch]);
    return { messages, loading };
}

export default useGetMessages
