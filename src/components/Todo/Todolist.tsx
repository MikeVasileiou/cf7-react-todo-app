
type Todo = {
    id: number;
    text: string;
}

type TodolistProps = {
    todos: Todo[];
    dispatch: React.Dispatch<{ type: "DELETE"; payload: number }>;
}

const Todolist = ({todos, dispatch}: TodolistProps) => {

    const handleDelete = (id:number) => () =>  {
        dispatch({type: "DELETE", payload: id});
    }

    return (

        <>
            <ul className="space-y-2 ">
                {todos.map(todo =>(
                    <li key ={todo.id} className="flex items-center justify-between bg-gray-100 p-2 rounded ">
                        <span>{todo.text}</span>
                        <button
                            onClick={handleDelete(todo.id)}
                            className="text-cf-dark-red hover:underline"
                        >
                            Delete
                        </button>

                    </li>
                    ))}

            </ul>
        </>

    )

}

export default Todolist;