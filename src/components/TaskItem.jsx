"use client"

import React from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import Swal from 'sweetalert2';

const TaskItem = ({formData, setFormData,deleteTodo,index,item:{title, description, isCompleted,_id}}) => {

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
  return (
    <>
      <tr className="bg-[#b8f2e6] border-b  border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
          {index+1}
        </th>
        <td className="px-6 py-4">
         {title}
        </td>
        <td className="px-6 py-4">
         {description}
        </td>
        <td className="px-6 py-4">
        {isCompleted? "Completed": "Pending"}
        </td>
        <td className="px-6 py-4">
          <div className='flex gap-4'>
          <FaRegPenToSquare className='cursor-pointer size-4 active:scale-75 text-[#5e6472]' />
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