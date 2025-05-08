import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Greeting from '../components/Greeting'
import LoginModal from '~/components/LoginModal';
import DateFilter from '~/components/DateFilter';
import TodoList from '~/components/TodoList';
import LoadingBar from '~/components/LoadBar';
import toast, { Toaster } from 'react-hot-toast';

import { useAppSelector } from "~/hooks";


const dashboard = () => {

  const [ loginModal, setLoginModal ] = useState(false);
  const isLoading = useAppSelector((state) => state.todo.isLoading)


  useEffect(() => {
      
  }, []);


  return (
    <div className='bg-transparent'>
        <Header  onClick={()=>{
          setLoginModal(true);
          
          toast.success("Welcome to the Dashboard", {
            duration: 4000,
            position: "bottom-right",
            style: {
              background: '#333',
              color: '#fff',
            },
          });
        }}/>
        { isLoading && <LoadingBar />}
        <Greeting 
          name='Saikat Islam' 
          onClick={()=>{
            setLoginModal(true);
          }} 
          />
        
        <hr className='w-[50%] ms-10 mt-2'/>


        <div className='flex gap-2 justify-between p-3 px-5'>
          <TodoList />
          <div className='my-auto hidden md:block'>
            <DateFilter onDateChange={()=>{}}  />
          </div>
        </div>


        { loginModal && <LoginModal 
          isOpen={loginModal} 
          onClose={()=>setLoginModal(false)}
          />}

        <Toaster
          position="top-center"
          reverseOrder={false}
        />
    </div>
  )
}

export default dashboard
