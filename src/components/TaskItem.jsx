"use client"

import React from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import NoTask from './NoTask';

const TaskItem = ({formData, setFormData,deleteTodo,completeTodo,index,item:{title, description, isCompleted,_id}}) => {

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#656d4a",
      cancelButtonColor: "#bc4749",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTodo(_id)
      }
    });
    
  }

  const handleComplete = () => {
    completeTodo(_id)
  }
  return (
    <>
    
      <tr className="bg-[#b8f2e6] border-b text-stone-900  border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap ">
          {index+1}
        </th>
        <td className={`px-6 py-4 ${isCompleted ? "line-through opacity-60" : ""}`}>
         {title}
        </td>
        <td className={`px-6 py-4 ${isCompleted ? "line-through opacity-60" : ""}`}>
         {description}
        </td>
        <td className="px-6 py-4">
        {isCompleted? "Completed": "Pending"}
        </td>
        <td className="px-6 py-4">
          <div className='flex gap-4'>
          <IoMdCheckmarkCircleOutline
          onClick={handleComplete}
          className={`cursor-pointer size-4 active:scale-75 text-[#5e6472] ${isCompleted && "text-green-500 pointer-events-none"}`} />
          <IoTrashOutline
          onClick={handleDelete}
          className='cursor-pointer size-5 active:scale-75 text-red-500'/>
          </div>
        </td>
      </tr>



    </>
  )
}

export default TaskItem