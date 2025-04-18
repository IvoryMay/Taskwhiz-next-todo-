import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <section className='max-w-[75%] mx-auto'>
      <div className='flex justify-between items-center mb-20 my-7 '>
      <h1 className="  text-4xl font-bold font-sans text-[#89b0ae]  bounce-in-top">
     Taskwhiz
  </h1>
  <div className='flex gap-2 text-[#a2180b] font-serif'>
    <Link href={'/about'} className='hover:text-[#6b9080]' >About</Link>
    <Link href={'/contact'} className='hover:text-[#6b9080]'>Contact</Link>
  </div>
  </div>
    </section>
  )
}

export default Header