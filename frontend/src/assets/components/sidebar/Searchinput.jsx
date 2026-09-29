import {React, useState} from 'react'
import toast from 'react-hot-toast';
import {IoSearchSharp} from 'react-icons/io5';
import useGetConversations from '../../../hooks/useGetConversations';
import {setSelectedConversation} from '../../../store/conversationAndMessages';
import {useDispatch} from "react-redux";

function Searchinput() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch(setSelectedConversation);
  // dispatch(setSelectedConversation(useConversations()));
  const {conversations} = useGetConversations();
  
  const handleSubmit= (e) =>{
    e.preventDefault();
    if(!search) return;
    else if(search.length < 3){
      return toast.error('Search term must be at least 3 characters long');
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      dispatch(setSelectedConversation(conversation));
      setSearch("");
    }
    else toast.error("No such user can be found");
  }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" className='inputClass' value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ borderRadius: "5px 5px 5px 5px", color: '#000000'}}>
        </input>
        <button type="submit" className='btnClass'>
            <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
        </form>
  )
}

export default Searchinput