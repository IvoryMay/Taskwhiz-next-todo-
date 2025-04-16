
"use client"
import React from 'react'
import { FaPlus } from "react-icons/fa6";

const CreateTask = ({formData, setFormData, onSubmitHandler}) => {

  const handleOnChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <div className='mb-8 font-serif w-[60%] mx-auto '>
      <form
      onSubmit={onSubmitHandler}
      className='flex flex-col gap-4 '>
        <input
        onChange={handleOnChange}
        type="text"
        value={formData.title}
         name='title' className="border border-black w-[300px] px-4 py-2 rounded-lg" placeholder='Enter your task title here....'/>
        <textarea
        onChange={handleOnChange}
        name="description"
        value={formData.description}
        id="" className='border border-black w-[300px] resize-none px-4 py-2 rounded-lg'placeholder='Enter your task description here...'></textarea>
        <button  type='submit' className='bg-[#5e6472] py-2 px-4 text-white rounded-lg w-fit'><div className='flex items-center gap-2'>
        <FaPlus/><span>Add Task</span></div></button>
      </form>
    </div>
  )
}

export default CreateTask