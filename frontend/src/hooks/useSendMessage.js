import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMessage } from '../store/conversationAndMessages';
import toast from 'react-hot-toast';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch(setMessage);
    let data = {};
    const selectedConversation = useSelector((state) => state.conversationAndMessageReducer.value.selectedConversation);
    const messages = useSelector((state) => state.conversationAndMessageReducer.value.messages);
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            if (selectedConversation.username === "gemini_ai") {

                const res = await fetch("/api/ai/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include", // Sends the auth cookie
                    body: JSON.stringify({ message: message }),
                });

                const data = await res.json();

                if (res.ok) {
                    // Update your local messages state with both the user message and the AI reply returned from the backend
                    setMessage((prev) => [...prev, data.userMessage, data.aiMessage]);
                } else {
                    console.error(data.error);
                }

            }
            else {
                const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({ message })
                })
                data = res.json();
                if (data.error) throw new Error(data.error);
                data.then(async function (result) {
                    if (messages?.length)
                        dispatch(setMessage(...messages, result));
                    else dispatch(setMessage(result));
                })
            }
        }
        catch (error) {
            toast.error(error.message);
        }

        finally {
            setLoading(false);
        }
    }

    return { loading, sendMessage };


}

export default useSendMessage;


