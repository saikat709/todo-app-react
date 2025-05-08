import DropdownDots from "./DropdownButton";
import PaginationButtons from "./PaginationButtons";
import SelectionActions from "./SelectionActions";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
    return (
        <div className="p-2 flex-1">
            <div className="flex justify-between">
                <h1 className="font-semibold text-lg text-start"> Your Todos - </h1>
                <SelectionActions />
                <div>
                    <DropdownDots onSelectAll={()=>{}} onUnselectAll={()=>{}} />
                </div>
            </div>
            <div className="h-96 my-2 mt-0 overflow-y-scroll scroll-smooth md:scroll-auto">
                { [1,1,1,1,1, 1, 1,1, 1, 1].map( (_, i) => {
                    return <TodoListItem key={i}/>;
                } )}
            </div>


            <PaginationButtons />
        </div>
    )
}

export default TodoList;