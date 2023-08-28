import React, { useState } from 'react';
import { addTodo } from '../features/todo/todoSlice';
import { useDispatch } from "react-redux";

const AddTodo = () => {
    const [input, setInput] = useState();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-x-3">
                <input
                 type="text" 
                 className="bg-gray-800 rounded border py-1 px-3 leading-8 text-gray-100" 
                 placeholder="Enter a todo..."
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                />
                <button className="text-white">Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodo;
