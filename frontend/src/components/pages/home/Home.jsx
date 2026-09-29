import React from 'react'
import Sidebar from '../../../assets/components/sidebar/Sidebar';
import MessageContainer from '../../../assets/components/messages/MessageContainer'
const Home=() =>{
  return (
    <div className="flex sm:h-[450x] md:h-[550x] rounded-lg overflow-hidden bg-gray-400 bg-clip-adding backdrop-filter backdrop-blur-lg bg-opacity-0"
    style={{backgroundImage: "radial-gradient(circle, #808 0%, #00d4ff 100%)", maxHeight: "30rem"}}>
        <Sidebar />
        <MessageContainer />

    </div>
  )
}

export default Home