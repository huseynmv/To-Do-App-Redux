import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            let todo = state.value.find(q => q.title == action.payload.title)
            if (!todo)
                state.value.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.value = state.value.filter(q => q.id != action.payload.id);
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer