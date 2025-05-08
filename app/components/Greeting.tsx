import { useState } from "react";
import AddTodoModal from "./AddTodoModal";

const Greeting = ( { name, onClick } : { name: string, onClick: () => void  } ) => {
    const hour = new Date().getHours();
    const [ isAddingTodo, setIsAddingTodo ] = useState(false);

    return (
        <div className="flex justify-between py-4 p-2 mt-2 mx-3 md:px-8">
            <div className="flex flex-col gap-2 items-start">
                <h1 className="text-lg md:text-2xl font-bold"> Hello, <span className="text-white drop-shadow-md drop-shadow-cyan-900/10 font-bolder">{name}</span> </h1>
                <h2 className="text-xl md:text-3xl cursive"> Good { hour < 11 ? "Morning" : hour < 15 ? "Noon" : hour < 18 ? "Afternoon" : hour < 20 ? 'Evening' : "Night" }....!!!! </h2>
            </div>
            <button 
                className="align-center my-auto"
                onClick={()=>setIsAddingTodo(true)}
                >
                <span className="text-white bg-green-600/60 border-2 hover:border border-white-200 hover:bg-green-400/50 hover:text-black transition-all duration-200 rounded-xl px-5 py-3 font-semibold"> ADD +  </span>
            </button>

            { isAddingTodo && <AddTodoModal onClose={()=>setIsAddingTodo(false)}/>}
        </div>
    )
}

export default Greeting