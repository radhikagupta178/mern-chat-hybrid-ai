import { useSocketContext } from '../context/SocketContext';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMessage } from '../store/conversationAndMessages';
import { useEffect } from 'react';

function useListenMessages() {
    const { socket } = useSocketContext();
    const dispatch = useDispatch(setMessage);
    const messages = useSelector((state) => state.conversationAndMessageReducer.value.messages);
    useEffect(() => {
        socket?.on(("newMessage"), (newMessage) => {
            dispatch(setMessage(...messages, newMessage));
        })
        return () => socket?.off("newMessage");
    }, [socket, dispatch, messages]);
}

export default useListenMessages