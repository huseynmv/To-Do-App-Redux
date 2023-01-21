import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ToDo from './src/screens/ToDo'
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { todoReducer } from './src/store/features/todo.reducer';


let appStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

const App = () => {
  return (
      <>
    <Provider store={appStore}>
      <ToDo/>
    </Provider>
  </>
  )
}

export default App

const styles = StyleSheet.create({})