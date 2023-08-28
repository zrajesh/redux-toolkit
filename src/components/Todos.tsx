import React from 'react';
import { useSelector } from "react-redux";

const Todos = () => {
    const todos = useSelector((state) => state.todos.todos);
    return (
        <div>
            {
                todos.map((todo) => (
                    <div key={todo.id}>{todo.text}</div>
                ))
            }
        </div>
    );
};

export default Todos;