import { GrLogout } from "react-icons/gr";
import React from 'react';
import useLogout from "../../../hooks/useLogout";

function LogoutButton() {
  const {loading, logout} = useLogout();
  return (
    <div className='mt-auto'>
      {!loading ? (
      <GrLogout className="w-6 h-6 text-white cursor-pointer" onClick={logout}/>
      ) : (<span className="loading loading-spinner"></span>)}
      </div>
  )
}

export default LogoutButton
