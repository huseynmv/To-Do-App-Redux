import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addTodo, removeTodo } from '../store/features/todo.slice';
import { useSelector } from 'react-redux';
import { addTodoItem } from '../store/features/todo.reducer';

const ToDo = () => {

  let { todos } = useSelector(state => state)
  
  console.log(todos.value)

  const [title, settitle] = useState('');
  let dispatch = useDispatch();

  const add = () => {
    let newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: title
    }

    dispatch(addTodo(newTodo))
  }
    const deleteTodo = item => {
      dispatch(removeTodo(item));
    };


  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.header.text}>To Do App</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.title.text}>Add New To Do</Text>
        <TextInput
          style={styles.input}
          onChangeText={settitle}
          placeholder="New To Do"
        />
        <TouchableOpacity style={styles.button} onPress={() => add()}>
          <Text style={styles.button.text}>Add</Text>
        </TouchableOpacity>
      </View>

      {
        todos.value.map((item) => {
          return (
            <>
              <Text>{item.title}</Text>
              <Button title="Delete" onPress={() => deleteTodo(item)}></Button>
            </>
          );
        })
      }

    </View>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ECF0F1',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    margin: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    text: {
      fontSize: 30,
      fontWeight: '700',
    },
  },
  title: {
    text: {
      fontSize: 22,
      fontWeight: '400',
    },
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 40,
    margin: 20,
    borderRadius: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6200EE',
    marginTop: 10,
    width: '100%',
    padding: 10,
    text: {
      color: 'white',
    },
  },
});
