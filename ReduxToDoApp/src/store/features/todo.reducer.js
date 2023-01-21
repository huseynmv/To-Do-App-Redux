import {createAction, createReducer} from '@reduxjs/toolkit';
import { addTodo, removeTodo } from './todo.slice';

const initialState = {
  value: [],
};

export const addTodoItem = createAction('todos/add');
export const removeTodoItem = createAction('todos/remove');

export const todoReducer = createReducer(initialState, builder => {
  builder
    .addCase(addTodo, (state, action) => {
      //title control
      let todo = state.value.find(q => q.title == action.payload.title);
      if (!todo) state.value.push(action.payload);
    })
    .addCase(removeTodo, (state, action) => {
      state.value = state.value.filter(q => q.id != action.payload.id);
    })
    
});
