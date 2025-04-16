import React from 'react'
import { IoGlassesOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div>
      <p className='flex items-end gap-1 justify-center  font-serif'><span className='text-[#bb3e03]'>created by</span>
        <span className='font-bold text-lg text-[#386641]'>Theint</span>
        <IoGlassesOutline className='text-[#333d29] text-2xl' />
        </p></div>
  )
}

export default Footer