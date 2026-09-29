import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    selectedConversation: {},
    messages: []
}

const conversationAndMessageSlice = createSlice({
    name: "conversationAndMessage",
    initialState: { value: initialStateValue },
    reducers: {
        setSelectedConversation: (state, action) => {
            state.value = {
                ...state,
                selectedConversation: action.payload
            }
        },
        setMessage: (state, action) => {
            state.value = {
                ...state.value,
                messages: [action.payload]
            }
        }
    }
});

export const { setSelectedConversation, setMessage } = conversationAndMessageSlice.actions;

export default conversationAndMessageSlice.reducer;

