import React from 'react'
import TaskItem from './TaskItem'
import NoTask from './NoTask'

const TaskList = ({formData, setFormData,todoData,deleteTodo,completeTodo}) => {
  return (
    <div className='font-serif '>
      <div className="relative max-w-[75%] px-1 sm:px-4 md:mx-auto   ">
   <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-lg overflow-x-auto  ">
    <thead className="text-xs   text-gray-700 uppercase bg-[#aed9e0] ">
      
      <tr className={`${todoData.length === 0 && "hidden"}`}>
        <th scope="col" className="px-6 py-3">
        No.
        </th>
        <th scope="col" className="px-6 py-3">
         Title
        </th>
        <th scope="col" className="px-6 py-3">
         Description
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    <tr >
        <td colSpan={5}>
          {todoData.length === 0 && <NoTask />}
        </td>
      </tr>
      {todoData.map((item, index) => (<TaskItem key={index} item={item} formData={formData} setFormData={setFormData} index={index} deleteTodo={deleteTodo} completeTodo={completeTodo} />))}

      
    </tbody>
  </table> 
  
</div>

      
    </div>
  )
}

export default TaskList