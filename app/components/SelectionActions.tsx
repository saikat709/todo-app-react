import React from 'react'
import { FaBoxOpen, FaCheck, FaSquare, FaTrash } from 'react-icons/fa6'

const SelectionActions = () => {
  return (
    <div className='text-sm flex gap-1 justify-between p-2 px-5 items-center ms-auto'>
        <p className='font-bold text-md mr-3'> 10 selected </p>
        <button className='flex gap-1 hover:bg-red-300 p-2 rounded-lg hover:text-black'>
            <FaTrash size={18} className='text-red-500 hover:text-red-600 cursor-pointer' />
            <p className='text-red-500 font-bold pr-1 hover:text-red-600 cursor-pointer'> Delete </p>
        </button>
        <button className='flex gap-1 hover:bg-green-300 p-2 rounded-lg hover:text-black'>
            <FaCheck size={18} className='text-green-500 hover:text-green-600 cursor-pointer' />
            <p className='text-green-500 font-bold pr-1 hover:text-green-600 cursor-pointer'> Mark Done </p>
        </button>

        <button className='flex gap-1 hover:bg-amber-300 p-2 rounded-lg hover:text-white'>
            <FaSquare size={18} className='text-white cursor-pointer' />
            <p className='text-amber-500 font-bold pr-1 hover:text-white cursor-pointer'> Mark Not Done </p>
        </button>
    </div>
  )
} 

export default SelectionActions
