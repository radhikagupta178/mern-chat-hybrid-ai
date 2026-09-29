import React from 'react'
import SearchInput from './Searchinput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

function Sidebar() {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput />
        <Conversations />
        <div className='logoutDiv'></div>
        <LogoutButton />
    </div>
  )
}

export default Sidebar