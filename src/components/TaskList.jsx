import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({formData, setFormData,todoData,deleteTodo}) => {
  return (
    <div className='font-serif '>
      <div className="relative px-1 md:px-8  lg:px-10 max-w-3xl lg:max-w-7xl ">
  <table className="w-fit md:w-[70%] text-sm text-left rtl:text-right text-gray-500   ">
    <thead className="text-xs   text-gray-700 uppercase bg-[#aed9e0] ">
      <tr>
        <th scope="col" className="px-6 py-3">
         ID
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
      {todoData.map((item, index) => (<TaskItem key={index} item={item} formData={formData} setFormData={setFormData} index={index} deleteTodo={deleteTodo} />))}

      
    </tbody>
  </table>
</div>

      
    </div>
  )
}

export default TaskList