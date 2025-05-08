import React, { useState } from 'react'
import { FaCheckSquare, FaEdit, FaSquare, FaTimesCircle } from 'react-icons/fa'
import { FaCheck, FaTrash } from 'react-icons/fa6';
import AddTodoModal from './AddTodoModal';

import { increment  } from "~/features/todo/todoSlice";
import { setIsLoggedIn } from '~/features/auth/authSlice';
import { useAppSelector, useAppDispatch } from "~/hooks";


const TodoListItem = () => {
    const [ isChecked, setIsChecked ]     = useState(false);
    const [ isEditing, setIsEditing ]     = useState(false);
    const [ isCompleted, setIsCompleted ] = useState(false);

    const dispatch = useAppDispatch()

    return (
        <div 
            className='flex justify-between items-center bg-gray-600/70 rounded-lg p-3 gap-3 my-1 md:my-2 shadow-md hover:bg-gray-700/70 transition-all duration-200 cursor-pointer'
            onClick={()=>{
                // setIsEditing(true);
                dispatch(increment());
                console.log("Clicked");
                dispatch(setIsLoggedIn(false));
                console.log("Logged out");
            }}
            style={{
                opacity: isCompleted ? 0.5 : 1,
                backgroundColor: isCompleted ? "#4B5563" : "#374151",
            }}
        >
            <div 
                className='flex gap-3 items-center' 
            >
                <div onClick={( e )=>{
                    e.stopPropagation();
                    setIsChecked(!isChecked);
                }}>
                    { isChecked ? <FaCheckSquare size={24}/> : <FaSquare size={24}/>}
                </div>
                <div>
                    <h1 className={` ${isCompleted && "line-through"}`}> Title of the note </h1>
                    <h3 className={`text-sm text-white/70 ${isCompleted && "line-through"}`}> Description about the note </h3>
                </div>
            </div>
            <div className='text-xs'>
                <h1> 26th Nov, 2024 </h1>
                <h3> 12:30 PM - 12:50 PM </h3>
            </div>
            {/* Actions */}
            <div className='flex gap-3'>
                { !isCompleted ? <FaCheck size={24} className='text-white' onClick={()=>{
                    setIsCompleted(true);
                }}/>
                : <FaTimesCircle size={24} className='text-white' onClick={()=>{
                    setIsCompleted(false);
                }}/> }
                <FaTrash size={24} className='text-red-500'/>
                <FaEdit size={24} className='text-green-500'/>
            </div>

            { isEditing && <AddTodoModal onClose={()=>{}}/>}

        </div>
    )
}

export default TodoListItem