import React from 'react'

const NoTask = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <img src="/no-task.jpeg" alt="" className='w-[60%] rounded-lg  ' />
      <p className='text-xl font-bold text-[#a44a3f]'>
        You have no tasks yet!
      </p>
      </div>
  )
}

export default NoTask