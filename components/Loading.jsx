import React from 'react'
import {FaInstagramSquare} from "react-icons/fa";

const Loading = ({show}) => {
  return (
    <div style={{zIndex:9999}} className={`${show ?"block" :"hidden" } w-full h-screen fixed top-0 flex items-center justify-center bg-login-input `}>
        <FaInstagramSquare color='pink' className='text-[200px] outline-none bg-none '/>
    </div>
  )
}

export default Loading