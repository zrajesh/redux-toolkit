import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Go To Gym"}],
}

export const todoReducer = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});

export const {addTodo, removeTodo} = todoReducer.actions;

export default todoReducer.reducer;
