import { useAppSelector } from "~/hooks";

const Header = ( {onClick}: {onClick: ()=> void} ) => {
  const count = useAppSelector((state) => state.todo.value)

  return (
    <header className="bg-indigo-700/90 backdrop-blur-lg shadow-lg text-white px-6 py-3 md:py-5 shadow-md flex justify-between items-center hover:bg-indigo-600/80 transition-all duration-300">
      <h1 className="text-2xl font-bold tracking-wide">📝 Todo(s) </h1>

      {/* <div className="flex items-center gap-3">
        <button 
          className="bg-cyan-700/90 border-1 text-white px-8 py-2 rounded-lg hover:bg-indigo-100 hover:text-black transition"
          onClick={ onClick }
        >
          Join
        </button> 
      </div> */}
    </header>
  );
};

export default Header;
