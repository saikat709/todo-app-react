import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const PaginationButtons = () => {
  return (
    <div className='flex justify-between px-2'>
      <button className='flex gap-2 hover:bg-green-300 p-2 rounded-lg hover:text-black'>
        <FaArrowLeft size={24} />
        <p> Previous </p>
      </button>
      <div className='flex gap-2'>
         { [1,2,3,4,5,6].map( (page, ind) => {
          return (
            <button key={ind} className='flex gap-2 hover:bg-white p-2 px-3 rounded-lg hover:text-black'>
              <p> {page} </p>
          </button>
          )
        }) }
      </div>
      <button className='flex gap-2 hover:bg-green-300 p-2 rounded-lg hover:text-black'>
        <p> Next </p>
        <FaArrowRight size={24} />
      </button>
    </div>
  )
}

export default PaginationButtons
